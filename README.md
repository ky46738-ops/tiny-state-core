# tiny-state-core

A minimal, composable state core. Mount it anywhere, detach anytime.

## What it does

- Holds a small state object
- Emits events when state changes
- Mounts / unmounts cleanly without side effects
- No dependencies

## Usage

```js
import { createCore } from './core.js'

const c = createCore({ count: 0 })
c.on('change', (state) => console.log(state))
c.set({ count: 1 })  // triggers 'change'
c.destroy()           // clean unmount
```

## Why

Sometimes you just need a tiny piece of shared state that can live inside anything — a module, a widget, a script — without pulling in a framework.

## License

MIT
