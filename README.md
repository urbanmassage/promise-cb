# Promise-CB

Promise-callback helper functions.


## fromCallback
Creates a Promise from a callback-style function.

Example:
```js
fromCallback(cb => fs.readFile(file, cb));
```


## toCallback
Calls a callback function with the result of a promise once it settles.

Example:
```js
toCallback(promise, (err, result) => {
  if (err) console.error(err.stack);
  else doSomething(result);
});
```
