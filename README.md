指向本體：🥃LKMINI｜Master Ledger
RootSHA256：6c0f6f487d8af27de4a8cee9f3fc853f0fbcf417cbd21acb56ac65c55adfcf34

# tiny-state-core

一個極簡的狀態核心模組，設計為可嵌入任意 JS 環境的最小狀態機。

## 功能
- 輕量級狀態管理
- 零依賴
- 可逆操作支援
- 事件訂閱機制

## 安裝
```bash
npm install tiny-state-core
```

## 使用方式
```js
const { createState } = require('./core');
const state = createState({ count: 0 });
state.set('count', 1);
console.log(state.get('count')); // 1
```

## 授權
MIT License
