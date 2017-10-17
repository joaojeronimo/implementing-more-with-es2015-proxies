const { test } = require('ava');
const Spy = require('./');

test('with no function', t => {
  const spy = Spy();
  t.false(spy.called);
  t.is(spy.callCount, 0);

  spy();
  spy();
  spy();

  t.true(spy.called);
  t.is(spy.callCount, 3);
})

test('with a custom function', t => {
  const sum = (...args) => args.reduce((acc, i) => acc + i, 0);
  const spy = Spy(sum);

  t.false(spy.called);
  t.is(spy.callCount, 0);
  t.deepEqual(spy.calls, []);

  spy(1, 2, 3);
  spy(4, 5 ,6)

  t.true(spy.called);
  t.is(spy.callCount, 2);
  t.deepEqual(spy.calls, [
    {
      argumentsList: [1, 2, 3],
      result: 6,
    },
    {
      argumentsList: [4, 5, 6],
      result: 15,
    },
  ]);
});
