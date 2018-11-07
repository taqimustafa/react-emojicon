import React, { Component } from 'react';
import css from 'react-emotion';
import EmojiPicker from './components/EmojiPicker';
const ApplicationWrapper = css('div')`
  margin: 0px;
  padding: 0px;
`;

class App extends Component {
  render() {
    return (
      <ApplicationWrapper>
        <EmojiPicker />
      </ApplicationWrapper>
    );
  }
}

export default App;
