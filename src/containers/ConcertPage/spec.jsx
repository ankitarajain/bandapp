/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import ConcertPage from './';

Enzyme.configure({ adapter: new Adapter() });


const storeFake = state => ({
    default: ()=>{},
    subscribe: ()=>{},
    dispatch: ()=>{},
    getState: () => state,
  });

describe('<ConcertPage />', () => {
  let wrapper;
  let component;
  beforeEach(() => {
   const state = {
    bands:{
      loading: false,
      error: null,
      bands:[]
    }
  }
  
    const store = storeFake(state);
    wrapper = mount(
      <Provider store={store}>
        <ConcertPage />
      </Provider>,
    );
    component = wrapper.find(ConcertPage);
  });

  it('render component correctly', () => {
    expect(component).to.have.lengthOf(1);
  });

  

});
