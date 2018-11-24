/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import BandList from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<BandList />', () => {

  it('renders correctly if no props passed', () => {
   const wrapper = shallow(<BandList />);
   expect(wrapper.exists()).to.be.true;

 });

});
