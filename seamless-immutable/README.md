# Seamless Immutable

Except implemented with ES2015 proxies and probably not feature complete.

## Usage

```js
const Immutable = require('./');

const obj = Immutable({ a: 1 });
obj.a = 2;
console.log(obj.a); // 1
```
