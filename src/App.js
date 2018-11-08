import React, { Component } from 'react';
import css from 'react-emotion';
import EmojiPicker from './components/EmojiPicker';
import { Provider } from 'react-redux'
import store from './store';
import './styles/fonts.css';

const ApplicationWrapper = css('div')`
  margin: 0px;
  padding: 0px;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApplicationWrapper>
          <EmojiPicker />
        </ApplicationWrapper>
      </Provider>
    );
  }
}

export default App;
