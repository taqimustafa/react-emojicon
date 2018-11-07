import React, { Component } from 'react';
import css from 'react-emotion';
import EmojisList from '../../utils/emojis';
import EmojiImage from '../../assets/facebook_16.png';

const size = 18;

const EmojiWrapper = css('div')`
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
`;

const EmojiListContainer = css('ul')`
  padding: 0px;
  margin: 0px;
`;

const EmojiListItem = css('li')`
  list-style-type: none;
  padding: 0px;
  display: inline-block;
`;

const Emoji = css('div')`
  display: block;
  width: ${size}px;
  height: ${size}px;
  background-image: url(${EmojiImage});
  background-position:${(props) => props.x*size}px ${(props) => props.y*size}px;
`;

class Emojis extends Component {
  render() {
    console.log(EmojisList);
    return (
      <EmojiWrapper>
        <EmojiListContainer>
          {EmojisList.map((emoji) => (
            <EmojiListItem>
              <Emoji x={emoji.sheet_x} y={emoji.sheet_y} data-name={emoji.name}/>
            </EmojiListItem>
          ))}
        </EmojiListContainer>
      </EmojiWrapper>
    );
  }
}

export default Emojis;
