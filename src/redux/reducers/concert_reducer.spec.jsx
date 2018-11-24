/* eslint no-unused-expressions: 0 */

import sinon from 'sinon';

import concertReducer from './concert_reducer';
import * as types from '../actions/action-types';

describe('concert_reducer', () => {
  describe('concertReducer', () => {

    const data = sinon.spy();
    const loading = sinon.spy();
    const error = sinon.spy();
    const previousState = { data, loading, error };

    it('sets init state is correct', () => {
      expect(concertReducer).to.be.a('function');

      const initialState = concertReducer(undefined, {});

      expect(initialState).to.have.all.keys('data', 'loading', 'error');
      expect(initialState.data).that.eql({ meta: {}, data: [] });
      expect(initialState.loading).to.be.false;
      expect(initialState.error).to.be.null;
    });
    it('derives state correctly after "CONCERTS_LOADING"', () => {
      const testAction = { type: types.CONCERTS_LOADING };

      const derivedState = concertReducer(previousState, testAction);

      expect(derivedState).to.have.all.keys('data', 'loading', 'error');
      expect(derivedState.data).to.be.equal(data);
      expect(derivedState.loading).to.be.true;
      expect(derivedState.error).to.be.equal(error);
    });
    it('derives state correctly after "CONCERTS_SUCCESSFULL"', () => {
      const testData = {"meta":{"next_uri":"h43Xfxu]ht4(MZKk*","previous_uri":"M7P)AhX(Nj%j(zbXQ4f","count":-805721860367.9744},"data":[{"name":"fKdMb8CbOzp$Fy","team_id":"[pi&QRbWR%#8KuillBky","sap_id":"rFaR7S$","uri":"@Jd%pr9svORkE7vwkwS","quota":"Xe48EKhpnQU!6m!)hX","created":"o1IMR5h&C1GiFG","updated":"zu%zG&Zhd"},{"name":"qe$c6L*MWYSiq4!EJy","team_id":"NIE7gq2YQkLBupw3nEv","sap_id":"eki$FSJ%yvZCwA","uri":"5RJTyLh6rJGJ3^BwDjOX","quota":"d8bf*[","created":"6J*&FBkeX$anmWRl(3rs","updated":"5SDsJ3"},{"name":"5Fk*sabQO7!i0ew6","team_id":"h0SglvX","sap_id":"zqaih7N0z1WPC$$b3$2","uri":"SKSc1l","quota":"lw[b^1ybQX!f]!Kz","created":"H*3]Zna!*qgeV7f]V5","updated":"fE11T3w"},{"name":"xRD&tERtpzWTZtQjP","team_id":"J8ZUB6K9Cf0","sap_id":"C@A8(chrRSpTTPg0x","uri":"KbDHA1M%mYUjB","quota":"pRP#a(5@jZ&a","created":"Nn(5!4Lmpt","updated":"8id#10!"},{"name":"tWo1Jw28)oAGCkBDw","team_id":"pl2yxhQo55$MA","sap_id":"C)UnIXg*N9c9^q","uri":"tHRo58b2","quota":"#rlRs!%Vs4R$4Rfp(5Yd","created":"dG)qYyWy9HScj0F","updated":"cB3kUPl^PjX4@%by"},{"name":"8TOGY#j@Of","team_id":"ruw$9R4AJYbAJ!(T","sap_id":"lOKOBs)s","uri":"Ct8ho","quota":"eLpGcVala","created":"Wo1IoQ[8R8O3vzR8^","updated":"o3SZ0M6wI2!V"}]};
      const testAction = { type: types.CONCERTS_SUCCESSFULL, payload: testData };

      const derivedState = concertReducer(previousState, testAction);

      expect(derivedState).to.have.all.keys('data', 'loading', 'error');
      expect(derivedState.data).to.be.equal(testData);
      expect(derivedState.loading).to.be.false;
      expect(derivedState.error).to.be.null;
    });
    it('derives state correctly after "CONCERTS_FAILED"', () => {
      const testError = {
        statusCode: 400,
        body: {
          bla: 'blub'
        }
      };
      const testAction = { type: types.CONCERTS_FAILED, error: { status: testError.statusCode, response: { body: testError.body } } };

      const derivedState = concertReducer(previousState, testAction);

      expect(derivedState).to.have.all.keys('data', 'loading', 'error');
      expect(derivedState.data).to.be.null;
      expect(derivedState.loading).to.be.false;
      expect(derivedState.error).to.be.eql(testError);
    });
  });
});
