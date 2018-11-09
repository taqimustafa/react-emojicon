import React, { Component } from 'react';
import css from 'react-emotion';
import EmojisList from '../../utils/emojis';

const EmojiRendererWrapper = css('div')`
  margin: 0px;
  padding: 0px;
`;

function renderEmoji(child, emojiArray) {
  if (child) {
    const renderChild = child.map((newChild) => {
      if (typeof newChild === 'string') {
        const emojiObj = newChild.replace(/:([\w\-\_\+]+):/g, (value) => {
          const emojiKey = value.replace(/:/g, '');
          if(emojiArray) {
            const url = require(`../../assets/images/apple/${emojiArray[emojiKey].image}`);
            return `<img alt="emoji" src="${url}" />`;
          }
        });
        return <span dangerouslySetInnerHTML={{ __html: emojiObj }} />;
      } else if (typeof newChild.props.children === 'string') {
        const emojiObj = newChild.props.children.replace(/:([\w\-\_\+]+):/g, (value) => {
          const emojiKey = value.replace(/:/g, '');
          if (emojiArray) {
            const url = require(`../../assets/images/apple/${emojiArray[emojiKey].image}`);
            return `<img alt="emoji" src="${url}" />`;
          }
        });
        return React.createElement(
          newChild.type,
          { ...newChild.props },
          <span dangerouslySetInnerHTML={{ __html: emojiObj }} />
        );
      } else if(newChild.props.children) {
        return renderEmoji(newChild.props.children, emojiArray);
      }
      return newChild;
    });
    return renderChild;
  }
  return child;
}

class EmojiRenderer extends Component {
  constructor() {
    super();
    this.emojiKey = {};
    this.emojiNameArray = [];
    EmojisList.forEach((emoji) => {
      this.emojiKey[emoji.short_name] = {
        "key": emoji.short_name,
        "name": emoji.name,
        "image": emoji.image,
      };
    });
  }
  render() {
    return (
      <EmojiRendererWrapper>
        {renderEmoji(this.props.children, this.emojiKey)}
      </EmojiRendererWrapper>
    );
  }
}

export default EmojiRenderer;
