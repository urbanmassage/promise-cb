interface Callback<T> {
  (err: Error, result: T): void;
}

function toCallback<T>(promise: Promise<T>, cb: Callback<T>): void {
  promise.then(
    result => cb(null, result),
    err => cb(err, null)
  ).catch(err => {
    // Don't swallow thrown errors
    setTimeout(() => {
      throw err;
    }, 0);
  });
}

export default toCallback;
