import React, { Component } from 'react';
import css from 'react-emotion';
import Header from './header';

const EmojiWrapper = css('div')`
  margin: 0px;
  padding: 0px;
  border: 1px solid #909090;
  border-radius: 5px;
  max-width: 340px;
`;

const EmojiSearch = css('div')`

`;
const RecentEmojis = css('div')`

`;
const EmojiBody = css('div')`

`;
const EmojiFooter = css('div')`

`;

class EmojiPicker extends Component {
  render() {
    return (
      <EmojiWrapper>
        <Header>
          Header
        </Header>
        <EmojiSearch>
          Search
        </EmojiSearch>
        <RecentEmojis>
          Recent
        </RecentEmojis>
        <EmojiBody>
          Body
        </EmojiBody>
        <EmojiFooter>
          Footer
        </EmojiFooter>
      </EmojiWrapper>
    );
  }
}

export default EmojiPicker;
