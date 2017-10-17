const { test } = require('ava');
const assign = require('lodash.assign');
const makeCRUD = require('./');
const memoryBackend = require('./memory-backend');

test('initialize', t => {
  const store = {};
  const backend = memoryBackend(store);
  const CRUD = makeCRUD(backend);

  const obj = { hello: 'world' };
  const savedObj = CRUD(obj);
  const id = savedObj.id;

  const objInStore = store[id];
  t.not(obj === objInStore);
  t.deepEqual(savedObj, objInStore);
	t.deepEqual(assign({ id }, obj), objInStore);
});

test('get', t => {
  const store = {};
  const CRUD = makeCRUD(memoryBackend(store));

  const obj = { hello: 'world' };
  const savedObj = CRUD(obj);
  const id = savedObj.id;

  const objInStore = store[id];

  t.is(obj.hello, objInStore.hello);
});

test('set', t => {
  const store = {};
  const CRUD = makeCRUD(memoryBackend(store));

  const obj = { hello: 'world' };
  const savedObj = CRUD(obj);
  const id = savedObj.id;

  savedObj.oneMoreProp = 42;
  const objInStore = store[id];

  t.is(savedObj.oneMoreProp, objInStore.oneMoreProp);
});

test('delete', t => {
  const store = {};
  const CRUD = makeCRUD(memoryBackend(store));

  const obj = { hello: 'world' };
  const savedObj = CRUD(obj);
  const id = savedObj.id;

  delete savedObj.hello;
  const objInStore = store[id];

  t.is(objInStore.hello, undefined);
})
