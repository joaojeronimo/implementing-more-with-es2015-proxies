module.exports = obj => new Proxy(obj, {
  set: () => { return true },
});
