/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import ConcertList from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<ConcertList />', () => {

  it('renders correctly ', () => {
    const defaultProps = {
      concerts: [{
        "id":1,
        "band_id":1,
        "band_name": "Tailor Swift", 
        "location": "London",
        "latlon" :"",
        "date":"1/12/2018" ,
        "time":"12 PM"
    },
    {
        "id":2,
        "band_id":1,
        "band_name": "AR Rehman", 
        "location": "India",
        "latlon" :"",
        "date":"2/12/2018" ,
        "time":"12 PM"
    }]
    }
   const wrapper = shallow(<ConcertList {...defaultProps} />);
   expect(wrapper.exists()).to.be.true;

 });

});
