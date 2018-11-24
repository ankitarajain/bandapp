// import React from 'react';
import Enzyme from 'enzyme';
// import { Provider } from 'react-redux';
// import { StaticRouter, Route } from 'react-router';
import Adapter from 'enzyme-adapter-react-15';
import sinon from 'sinon';
import * as Api from '../../../../src/redux/api';
// import store from '../../../../src/redux/store';

// import StreamListPage from '../../../../src/containers/StreamListPage';
// import StreamList from "../../../../src/components/StreamList";

Enzyme.configure({ adapter: new Adapter() });

describe('StreamListPage', () => {
  
  // const userJson = {
  // 	username: 'demouser',
  // 	teams: [{
  //           "team_id": "ZMON",
  //           "name": "ZMON",
  //           "quota": {
  //               "max_streams": 1
  //           },
  //           "uri": "/api/teams/1",
  //           "sap_id": "1",
  //           "created": "2018-10-22T15:15:44.962589Z",
  //           "modified": "2018-10-22T15:15:44.974261Z",
  //           "total_cost": {
  //               "amount": 0,
  //               "currency": "EUR"
  //           },
  //           "exceeding_cost": {
  //               "amount": 0,
  //               "currency": "EUR"
  //           },
  //           "total_stream": 1
  //       } ],
  // 	url: '/user/demouser'
  // };

  const teamsJson = {
  	meta: {},
  	data: [
  		{
  			name: 'ZMON',
  			team_id: 'ZMON',
  			sap_id: '1',
  			uri: '/api/teams/1',
  			quota: 5,
  			created: '',
  			updated: ''
  		}
  	]
  }

  const getAllTeamsPromise = Promise.resolve(teamsJson);
  const getAllTeamsStup = sinon.stub(Api, 'getAllTeams').returns(getAllTeamsPromise);

  // const wrapper = mount(
  //   <Provider store={store}>
  //     <StaticRouter location="/lightstep" context={{}}>
  //       <Route path="/lightstep" exact component={StreamListPage} />
  //     </StaticRouter>
  //   </Provider>
  // );
  
  it('does initial call and propagades data down', () => {
    expect(getAllTeamsStup.calledOnce).to.be.true;
  });
});
