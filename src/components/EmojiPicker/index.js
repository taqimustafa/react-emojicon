import React, { Component } from 'react';
import css from 'react-emotion';
import Header from './header';
import Search from './search';
import Emojis from './emojis';

const EmojiWrapper = css('div')`
  margin: 0px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  max-width: 340px;
  padding: 5px;
`;

const EmojiFooter = css('div')`

`;

class EmojiPicker extends Component {
  render() {
    return (
      <EmojiWrapper>
        <Header />
        <Search />
        <Emojis />
        <EmojiFooter>
          Footer
        </EmojiFooter>
      </EmojiWrapper>
    );
  }
}

export default EmojiPicker;
