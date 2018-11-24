/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import Footer from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<Footer/>', () => {
  it('rendered correctly', () => {
  	const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.hasClass('footer-component')).to.be.true;
  });
});
