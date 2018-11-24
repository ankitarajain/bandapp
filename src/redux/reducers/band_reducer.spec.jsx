/* eslint no-unused-expressions: 0 */

import sinon from 'sinon';

import bandReducer from './band_reducer';
import * as types from '../actions/action-types';

describe('band_reducer', () => {
  describe('bandReducer', () => {

    const data = sinon.spy();
    const loading = sinon.spy();
    const error = sinon.spy();
    const previousState = { data, loading, error };

    it('sets init state is correct', () => {
      expect(bandReducer).to.be.a('function');

      const initialState = bandReducer(undefined, {});

      expect(initialState).to.have.all.keys('data', 'loading', 'error');
      expect(initialState.data).that.eql({});
      expect(initialState.loading).to.be.false;
      expect(initialState.error).to.be.null;
    });
    it('derives state correctly after "BAND_LOADING"', () => {
      const testAction = { type: types.BAND_LOADING };

      const derivedState = bandReducer(previousState, testAction);

      expect(derivedState).to.have.all.keys('data', 'loading', 'error');
      expect(derivedState.data).to.be.equal(data);
      expect(derivedState.loading).to.be.true;
      expect(derivedState.error).to.be.equal(error);
    });
    it('derives state correctly after "BAND_SUCCESSFULL"', () => {
      const testData = {"username":"Ndnpkfb6t9vqzowZqbx","teams":["Ie1*qrTjr1vIP","FV%x5boDB7yHC!7dR","eE9!56gOI&Pk7","4ZQKJArAiVyf)H]","[l%5nWk9)4W]wELrg5","ZkTckIgxIe&z4Zn]t","I15C0SdHXSMLX(dNYr^%","x[M&]"],"url":"juFn)dE2(jVu(A#3"};
      const testAction = { type: types.BAND_SUCCESSFULL, payload: testData };

      const derivedState = bandReducer(previousState, testAction);

      expect(derivedState).to.have.all.keys('data', 'loading', 'error');
      expect(derivedState.data).to.be.equal(testData);
      expect(derivedState.loading).to.be.false;
      expect(derivedState.error).to.be.null;
    });
    it('derives state correctly after "BAND_FAILED"', () => {
      const testError = {
        statusCode: 400,
        body: {
          bla: 'blub'
        }
      };
      const testAction = { type: types.BAND_FAILED, error: { status: testError.statusCode, response: { body: testError.body } } };

      const derivedState = bandReducer(previousState, testAction);

      expect(derivedState).to.have.all.keys('data', 'loading', 'error');
      expect(derivedState.data).to.be.null;
      expect(derivedState.loading).to.be.false;
      expect(derivedState.error).to.be.eql(testError);
    });
  });
});
