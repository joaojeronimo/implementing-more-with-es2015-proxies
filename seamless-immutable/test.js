const { test } = require('ava');
const Immutable = require('./');

test('Seamless Immutable', t => {
  const obj = Immutable({ a: 1 });
  obj.a = 2;

  t.is(obj.a, 1);
  t.deepEqual(obj, { a: 1 });
});
