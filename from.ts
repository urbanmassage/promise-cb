import {Callback} from './shared';

function fromCallback<T>(fn: (cb: Callback<T>) => void): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    fn((err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

export default fromCallback;
