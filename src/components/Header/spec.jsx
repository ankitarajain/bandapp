/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import DocumentTitle from "react-document-title";

import Header from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header/>', () => {
  it('renders correctly without Properties', () => {
  	const wrapper = shallow(<Header />);
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.find(DocumentTitle)).to.be.exist;
    expect(wrapper.find('.title')).to.be.exist;
    
  });
});