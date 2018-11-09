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

const RendererWrapper = css('div')`
  margin-top: 30px;
  font-size: 30px;
  font-family: lato-light;
  font-weight: 100;
`;

const BoldWrapper = css('b')`
  font-family: lato-bold;
  font-weight: bold;
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
            <RendererWrapper>
              :smile:
              <p>
                <b>
                  <i>Hello, :grinning:</i>,
                  <div>
                    <p>
                      <BoldWrapper>Bold Text</BoldWrapper>
                      <br/>
                      <strong> Strong Text</strong>
                      <i>Italic Text</i>
                    </p>
                  </div>
                </b>
              </p>
            </RendererWrapper>
          </EmojiRenderer>
        </ApplicationWrapper>
      </Provider>
    );
  }
}

export default App;
