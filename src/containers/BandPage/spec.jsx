/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import BandPage from './';
import BandList from '../../components/BandList';

Enzyme.configure({ adapter: new Adapter() });


const storeFake = state => ({
    default: ()=>{},
    subscribe: ()=>{},
    dispatch: ()=>{},
    getState: () => state,
  });

describe('<BandPage />', () => {
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
        <BandPage />
      </Provider>,
    );
    component = wrapper.find(BandPage);
  });

  it('render component correctly', () => {
    expect(component).to.have.lengthOf(1);
  });

  it('should have 1 "BandList as child', () => {
    expect(component.find(BandList)).to.have.lengthOf(1);
  });



});
