const assign = require('lodash.assign');

module.exports = backend => obj => {
  const id = Date.now(); // use UUIDs in real life, always
  const newObj = assign({}, obj, { id });
  backend.save(newObj);
  return new Proxy(newObj, backend)
};
