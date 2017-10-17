## Re-implementing (more) things we already have, with

# ES2015 proxies

why not


Pretty much James' talk last month (two months ago ?), with different examples  


James did

* debugSetInterval
* fancyConsole
* lazyRequire
* memoisation
* preventXss
* schemaValidation

You can find the source for those [here](https://github.com/jamesseanwright/ecmascript-proxy-examples)


I'm doing

* an ORM
* seamless Immutable
* a Spy



What are

# ES2015 Proxies ?


a very underrated and forgotten API that let's you do some magic


```js
const handler = {
    get: (target, property) => {
      console.log('getting', property, 'of', target)
      return target[property]
    },
    set: (target, property, value) => {
      console.log('setting', property, 'to', value, 'on', target)
      target[property] = value
    }
};

const obj = {};
const p = new Proxy(obj, handler);

p.hello = 'world'
// setting hello to world on {}
console.log(p.hello)
// getting hello of {hello: "world"}
```


## Why do we need them ?


We don't


But it let's us implement some things with a very clear and natural API.


## Putting names to things

```js
const handler = { // The properties of the handler object are traps
  get: (target, property) => target[property] // this is a trap
}

// target is the object you are putting a proxy on top of

const p = new Proxy(target, handler);

// p is a proxy to the target, with traps set in handler
```


## More traps

getPrototypeOf(), setPrototypeOf(), isExtensible(), preventExtensions(), getOwnPropertyDescriptor(), defineProperty(), has(), **get()**, **set()**, **deleteProperty()**, ownKeys(), **apply()**, construct(),


## Read more about it

* [Introducing ES2015 Proxies](https://developers.google.com/web/updates/2016/02/es2015-proxies)
by Addy Osmani
* [Proxy - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)



# Now on to the actual talk



# Seamless Immutable


From the [Seamless Immutable README](https://github.com/rtfeldman/seamless-immutable#seamless-immutable):

```js
var array = Immutable([
  "totally",
  "immutable",
  {hammer: "Can’t Touch This"}
]);

array[1] = "I'm going to mutate you!"
array[1] // "immutable"

array[2].hammer = "hm, surely I can mutate this nested object..."
array[2].hammer // "Can’t Touch This"

for (var index in array) { console.log(array[index]); }
// "totally"
// "immutable"
// { hammer: 'Can’t Touch This' }

JSON.stringify(array) // '["totally","immutable",{"hammer":"Can’t Touch This"}]'
```


Wait... So all we need to do is...


Ignore property setting ? Easy!


Code!



# An ORM


 #clickbait


Let's just do a store backed object with CRUD.


Record object initialisation, property setting, getting and deleting.

Replay accordingly on a backend store.


Code!



# A Spy

// TODO: insert James Bond gif here


Easy, a proxy that records function calls


Code!



# Possibilities are endless!

my time is not



# Can this ruin Javascript for all of us ?


yes


```js
const obj = getObj();
console.log(obj.a); // I wonder what it will log... undefined ?
```

# Uncaught Error



# Thanks!

## github.com/joaojeronimo

## twitter.com/joaojeronimo
