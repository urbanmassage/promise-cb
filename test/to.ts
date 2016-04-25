/// <reference path="../typings/main.d.ts" />

import {expect} from 'chai';
import toCallback from '../to';

describe('app/lib/as-callback', () => {
  it('rejects', done => {
    toCallback(
      Promise.reject({message: 'Test'}),
      (err, result) => {
        try {
          expect([err, result]).to.deep.equal([{message: 'Test'}, null]);
          done();
        } catch(err) { done(err); }
      }
    );
  });

  it('resolves', done => {
    toCallback(
      Promise.resolve({message: 'Test'}),
      (err, result) => {
        try {
          expect([err, result]).to.deep.equal([null, {message: 'Test'}]);
          done();
        } catch(err) { done(err); }
      }
    );
  });
});
