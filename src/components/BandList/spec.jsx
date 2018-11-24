/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import BandList from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<BandList />', () => {

  it('renders correctly ', () => {

    const defaultProps = {
      bands:[
        {
        "id":1,
        "name": "Tailor Swift", 
        "description": "",
        "image":"http://www.highlandradio.com/wp-content/uploads/2017/11/taylor-swift.jpg" 
    },
            
        {
        "id":2,
        "name": "Selena Gomez",
        "description": "",
        "image":"https://www.billboard.com/files/styles/article_main_image/public/media/selena-gomez-2018-r-coach-billboard-1548.jpg" 
    }]
  }
   const wrapper = shallow(<BandList {...defaultProps} />);
   expect(wrapper.exists()).to.be.true;

 });

});
