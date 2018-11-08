import React, { Component } from 'react';
import css from 'react-emotion';
import EmojisList from '../../utils/emojis';
import Categories from '../../utils/categories';
const size = 26;

const EmojiWrapper = css('div')`
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
`;

const CategoryListContainer = css('ul')`
  padding: 0px;
  margin: 0px;
  max-height: 280px;
  overflow: scroll;
`;

const CategoryContainer = css('li')`

`;

const CategoryHeading = css('h1')`
  font-family: lato;
  font-weight: 100;
  font-size: 16px;
  margin: 10px 5px;
`;

const EmojiListContainer = css('ul')`
  padding: 0px;
  margin: 0px;
`;

const EmojiListItem = css('li')`
  position: relative;
  list-style-type: none;
  padding: 4px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: inline-block;
  &:hover {
    background-color: rgba(200,200,200,0.3);
  }
`;

const Emoji = css('img')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: ${size}px;
  height: ${size}px;
`;

class Emojis extends Component {
  constructor() {
    super();
    this.emojiKey = {};
    EmojisList.forEach((emoji) => {
      this.emojiKey[emoji.short_name] = {
        "name": emoji.name,
        "image": emoji.image,
      };
    });
  }
  render() {
    console.log(this.emojiKey);
    return (
      <EmojiWrapper>
        <CategoryListContainer>
          {Object.keys(Categories).map((category) => (
            <CategoryContainer key={category}>
              <CategoryHeading>
                {category}
              </CategoryHeading>
              <EmojiListContainer>
                {Categories[category].map((emoji) => (
                  <EmojiListItem key={emoji}>
                    <Emoji
                      data-key={emoji}
                      data-name={this.emojiKey[emoji].name}
                      image={this.emojiKey[emoji].image}
                      src={require(`../../assets/images/apple/${this.emojiKey[emoji].image}`)}
                    />
                  </EmojiListItem>
                ))}
              </EmojiListContainer>
            </CategoryContainer>
          ))}
        </CategoryListContainer>
      </EmojiWrapper>
    );
  }
}

export default Emojis;
