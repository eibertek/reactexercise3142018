import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableFooter,
} from 'material-ui/Table';
import Mail from './Mail.jsx';

Enzyme.configure({ adapter: new Adapter() })

const content = [
  { id:0, from: 'xxxxxxx', to:'me', cc:[], subject:'', body:'sasasassa'},
  { id:1, from: 'yyyyyyy', to:'me', cc:[], subject:'', body:'sasasassa'},
  { id:2, from: 'zzzzzzz', to:'me', cc:[], subject:'', body:'sasasassa'},
  { id:3, from: 'aaaaaaa', to:'me', cc:[], subject:'', body:'sasasassa'},
];
const details={};
describe('Mail Component', ()=>{
  it('Instantiate Component', ()=>{
    const wrapper = mount(
      <MuiThemeProvider>
                      <Mail content={content}
                                  isLoading={false}
                                  isLoadingDetails={false}
                                  details={details}
                                  fetchMails={()=>{}}    />
      </MuiThemeProvider>);
    expect(wrapper.find('Table').exists()).toEqual(true);
    expect(wrapper.find('TableBody')).toHaveLength(1);
    expect(wrapper.find('Inbox')).toHaveLength(4);
  });
});