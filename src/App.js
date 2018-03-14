import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import SearchBar from 'material-ui-search-bar';
import Mail from './Components/Mail';
import store from './store/createStore';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="Mail Inbox"
            showMenuIconButton={false}
          />
          <div className="sidePanel">
            <div className="search">
              <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
              />
              <div className="developer">
                Mariano Eiberman / TradeHelm
              </div>
            </div>
          </div>
          <div className="mailBox">
            <Mail />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const ProviderApp = (props) =>  <Provider store={store}>
    <App />
  </Provider>;

export default ProviderApp;
