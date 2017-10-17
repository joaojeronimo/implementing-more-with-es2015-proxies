const assign = require('lodash.assign');

module.exports = backend => obj => {
  const _id = Date.now(); // use UUIDs in real life, always
  const newObj = assign({}, obj, { _id });
  backend.save(newObj);
  return new Proxy(newObj, backend)
};
