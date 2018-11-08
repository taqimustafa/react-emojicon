import React, { Component } from 'react';
import css from 'react-emotion';
import EmojisList from '../../utils/emojis';
import Categories from '../../utils/categories';
import Header from './header';
import Search from './search';
import Emojis from './emojis';
import Footer from './footer';

const EmojiWrapper = css('div')`
  margin: 0px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  max-width: 340px;
  padding: 5px;
`;

class EmojiPicker extends Component {
  constructor() {
    super();
    this.emojiKey = {};
    this.emojiNameArray = [];
    EmojisList.forEach((emoji) => {
      this.emojiKey[emoji.short_name] = {
        "name": emoji.name,
        "image": emoji.image,
      };
      this.emojiNameArray.push({
        name: emoji.name,
        key: emoji.short_name,
      });
    });
  }

  render() {
    return (
      <EmojiWrapper>
        <Header />
        <Search />
        <Emojis categories={Categories} emojis={this.emojiKey} />
        <Footer emojis={this.emojiKey}/>
      </EmojiWrapper>
    );
  }
}

export default EmojiPicker;
