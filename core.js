/**
 * tiny-state-core
 * 指向本體：🥃LKMINI｜Master Ledger
 * RootSHA256：6c0f6f487d8af27de4a8cee9f3fc853f0fbcf417cbd21acb56ac65c55adfcf34
 */

'use strict';

function createState(initialState = {}) {
  let _state = Object.assign({}, initialState);
  const _listeners = {};
  const _history = [];

  return {
    get(key) {
      return _state[key];
    },
    set(key, value) {
      _history.push({ key, prev: _state[key], next: value });
      _state[key] = value;
      if (_listeners[key]) {
        _listeners[key].forEach(fn => fn(value));
      }
    },
    subscribe(key, fn) {
      if (!_listeners[key]) _listeners[key] = [];
      _listeners[key].push(fn);
    },
    undo() {
      const last = _history.pop();
      if (last) _state[last.key] = last.prev;
    },
    snapshot() {
      return Object.assign({}, _state);
    }
  };
}

module.exports = { createState };
