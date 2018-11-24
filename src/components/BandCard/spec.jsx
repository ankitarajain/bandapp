/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import BandCard from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<BandCard />', () => {

  it('renders correctly', () => {
  const defaultProps = {
    selected : false,
    data : {
      "id":2,
      "name": "Selena Gomez",
      "description": "",
      "image":"https://www.billboard.com/files/styles/article_main_image/public/media/selena-gomez-2018-r-coach-billboard-1548.jpg" 
  }
  }
   const wrapper = shallow(<BandCard  {...defaultProps} />);
   expect(wrapper.exists()).to.be.true;

 });

});
