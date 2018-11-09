import React, { Component } from 'react';
import css from 'react-emotion';
import EmojisList from '../../utils/emojis';

const EmojiRendererWrapper = css('div')`
  margin: 0px;
  padding: 0px;
`;

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
  
  renderEmoji(child, emojiArray) {
    if (child) {
      const element = (child.props && child.props.children.length > 0 ? child.props.children : child);
      const renderChild = element.map((newChild) => {
        if (typeof newChild === 'string') {
          console.log()
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
          return this.renderEmoji(newChild.props.children, emojiArray);
        }
        console.log(newChild);
        return newChild;
      });
      return renderChild;
    }
    return child;
  }
  render() {
    return (
      <EmojiRendererWrapper>
        {this.renderEmoji(this.props.children, this.emojiKey)}
      </EmojiRendererWrapper>
    );
  }
}

export default EmojiRenderer;
