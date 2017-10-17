module.exports = (fn = () => {}) => {
  const spy = new Proxy(fn, {
    apply: (target, thisArg, argumentsList) => {
      const result = target.apply(thisArg, argumentsList);
      spy.called = true;
      spy.callCount++;
      spy.calls.push({ argumentsList, result });
      return result;
    }
  });

  spy.called = false;
  spy.callCount = 0;
  spy.calls = [];

  return spy;
}
