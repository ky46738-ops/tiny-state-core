/**
 * tiny-state-core test
 * 指向本體：🥃LKMINI｜Master Ledger
 */

const { createState } = require('./core');

let passed = 0;
let failed = 0;

function assert(label, condition) {
  if (condition) {
    console.log(`✅ PASS: ${label}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${label}`);
    failed++;
  }
}

const state = createState({ count: 0, name: 'LKMINI' });

assert('初始值 count === 0', state.get('count') === 0);
assert('初始值 name === LKMINI', state.get('name') === 'LKMINI');

state.set('count', 42);
assert('set count === 42', state.get('count') === 42);

state.undo();
assert('undo count === 0', state.get('count') === 0);

const snap = state.snapshot();
assert('snapshot 是獨立物件', snap !== state);
assert('snapshot count === 0', snap.count === 0);

let notified = false;
state.subscribe('count', () => { notified = true; });
state.set('count', 99);
assert('subscribe 觸發通知', notified === true);

console.log(`\n結果：${passed} 通過，${failed} 失敗`);
