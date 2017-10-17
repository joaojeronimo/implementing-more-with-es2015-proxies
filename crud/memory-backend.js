const assign = require('lodash.assign');

module.exports = store => ({
  save: (obj) => store[obj._id] = obj,
  get: (target, property) => store[target._id][property],
  set: (target, property, value) => {
    const _id = target._id;
    store[_id] = assign(
      {},
      store[_id],
      {
        [property]: value
      }
    );
    return true;
  },
  deleteProperty: (target, property) => {
    const _id = target._id;
    const newObj = assign({}, store[_id]);
    delete newObj[property];
    store[_id] = newObj;
    return true;
  },
});
