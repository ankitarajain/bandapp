/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import ReactTable from "react-table/lib";
import StreamList from '.';
import Filters from "../../components/Filters";

Enzyme.configure({ adapter: new Adapter() });

describe('<StreamList/>', () => {

  it('renders correctly if no props passed', () => {
   const wrapper = shallow(<StreamList />);
   expect(wrapper.exists()).to.be.true;

   const filtersComp = wrapper.find(Filters);
   expect(filtersComp.exists()).to.be.true;
   expect(filtersComp).to.have.length(1);

   const reactTableComp = wrapper.find(ReactTable);
   expect(reactTableComp.exists()).to.be.true;
   expect(reactTableComp).to.have.length(1);
 });

  it('renders correctly when props are passed', () => {
     const testProps = {
       teams:{data:[]},
       user:{}
    };
    const wrapper = shallow(<StreamList {...testProps} />);
    expect(wrapper.exists()).to.be.true;

    const filtersComp = wrapper.find(Filters);
    expect(filtersComp.exists()).to.be.true;
    expect(filtersComp).to.have.length(1);

    const reactTableComp = wrapper.find(ReactTable);
    expect(reactTableComp.exists()).to.be.true;
    expect(reactTableComp).to.have.length(1);

  });  
});
