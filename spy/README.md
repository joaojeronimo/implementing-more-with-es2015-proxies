# Spy

Like the one in Sinon but simpler and with less features.

But implemented with ES2015 Proxies, because they are very cool.

## Usage

```js
const Spy = require('./');
const identity = i => i;
const spy = Spy(identity);

spy(1)

console.log(spy.called); // true
console.log(spy.callCount); // 1
console.log(spy.calls); // { argumentsList: [1], result: 1 }
```
