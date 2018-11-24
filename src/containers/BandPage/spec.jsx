/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import BandPage from './';

Enzyme.configure({ adapter: new Adapter() });


const storeFake = state => ({
    default: ()=>{},
    subscribe: ()=>{},
    dispatch: ()=>{},
    getState: () => state,
  });

describe('<BandPage />', () => {
  


});
