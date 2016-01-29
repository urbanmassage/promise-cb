import {expect} from 'chai';
import fromCallback from '../from';

describe('app/lib/from-callback', () => {
  it('rejects', () => {
    const promise = fromCallback(cb => cb(new Error('Test')));
    
    return promise.then(
      () => expect.fail,
      err => expect(err).to.have.property('message').that.equals('Test')
    );
  });
  
  it('rejects on throw', () => {
    const promise = fromCallback(cb => {throw new Error('Test');});
    
    return promise.then(
      () => expect.fail,
      err => expect(err).to.have.property('message').that.equals('Test')
    );
  });
  
  it('resolves', () => {
    const promise = fromCallback(cb => cb(null, {message: 'Test'}));
    
    return promise.then(
      result => expect(result).to.have.property('message').that.equals('Test'),
      err => expect.fail
    );
  });
});
