import React, { Component } from 'react';
import css from 'react-emotion';
import EmojiPicker from './components/EmojiPicker';
import EmojiRenderer from './components/EmojiRenderer';
import { Provider } from 'react-redux'
import store from './store';
import './styles/fonts.css';

const ApplicationWrapper = css('div')`
  margin: 0px;
  padding: 0px;
`;

class App extends Component {
  selectEmoji(emoji) {
    console.log(emoji);
  }
  render() {
    return (
      <Provider store={store}>
        <ApplicationWrapper>
          <EmojiPicker onSelect={this.selectEmoji}/>
          <EmojiRenderer>
            :smile:
            <div>
              Hello, :grinning:,
              <b>Bold Text</b>
            </div>
          </EmojiRenderer>
        </ApplicationWrapper>
      </Provider>
    );
  }
}

export default App;
