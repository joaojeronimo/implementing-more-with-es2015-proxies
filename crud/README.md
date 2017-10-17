# Store backed object

An object, backed by a store

## Usage

```js
const store = {};
const backend = memoryBackend(store);
const CRUD = makeCRUD(backend);

const obj = CRUD({ hello: world });
obj.a = 1;
delete obj.hello;
console.log(store); // { [obj.id]: { a: 1, id: obj.id } }
```

## Implementing a backend

A backend must implement the [methods of a Proxy handler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy),
plus a `save` method, used for object initialisation;
