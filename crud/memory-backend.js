const assign = require('lodash.assign');

module.exports = store => ({
  save: (obj) => store[obj.id] = obj,
  get: (target, property) => store[target.id][property],
  set: (target, property, value) => {
    const id = target.id;
    store[id] = assign(
      {},
      store[id],
      {
        [property]: value
      }
    );
    return true;
  },
  deleteProperty: (target, property) => {
    const id = target.id;
    const newObj = assign({}, store[id]);
    delete newObj[property];
    store[id] = newObj;
    return true;
  },
});
