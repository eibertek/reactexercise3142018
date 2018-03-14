import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Details from './Details.jsx';

Enzyme.configure({ adapter: new Adapter() })

const inbox = {
  from:'', to:'', cc:[], subject:'', body:'',
};
const details={};
describe('Mail Component', ()=>{
  it('Instantiate Component', ()=>{
    const wrapper = mount(
        <Details
              isLoading={false}
              inbox={inbox}
              details={details}    />
      );
    expect(wrapper.find('div').exists()).toEqual(true);
  });
});