/* eslint no-unused-expressions: 0 */

import sinon from 'sinon';

import { getConcertsList } from './concert_actions';
import * as Api from '../api';

describe('concert_actions', () => {
    describe('getConcertsList', () => {
        it('dispatches on success correctly', done => {
            
            const resolveToData = {"username":"Ndnpkfb6t9vqzowZqbx","teams":["Ie1*qrTjr1vIP","FV%x5boDB7yHC!7dR","eE9!56gOI&Pk7","4ZQKJArAiVyf)H]","[l%5nWk9)4W]wELrg5","ZkTckIgxIe&z4Zn]t","I15C0SdHXSMLX(dNYr^%","x[M&]"],"url":"juFn)dE2(jVu(A#3"};
            const resolve = Promise.resolve(resolveToData);
            const promisedFetchProfile = sinon.stub(Api, 'getConcertsList').returns(resolve);
            const dispatchSpy = sinon.spy();

            expect(getConcertsList).to.be.a('function');
            const dispatchable = getUser();
            expect(dispatchable).to.be.a('function');
            dispatchable(dispatchSpy).then(() => {
           
                promisedFetchProfile.restore();
                done();
            });
        });

        it('dispatches on error correctly', done => {
            const rejectionCause = 'rejectionCause';
            const promisedFetchProfile = sinon.stub(Api, 'getConcertsList').rejects(rejectionCause);
            const dispatchSpy = sinon.spy();

            expect(getConcertsList).to.be.a('function');
            const dispatchable = getUser();
            expect(dispatchable).to.be.a('function');
            dispatchable(dispatchSpy).then(() => {          
                promisedFetchProfile.restore();
                done();
            });
        });
    });
});
