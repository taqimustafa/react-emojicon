import React, { Component } from 'react';
import css from 'react-emotion';
import EmojisList from '../../utils/emojis';
import Categories from '../../utils/categories';


const EmojiRendererWrapper = css('div')`
  margin: 0px;
  padding: 0px;
`;

function renderEmoji(child) {
  const renderChild = child.map((newChild) => {
    if (typeof newChild === 'string') {
      return newChild;
    } else if (typeof newChild.props.children === 'string') {
      return newChild.props.children;
    }
    return renderEmoji(newChild.props.children);
  });
  return renderChild;
}

function EmojiRenderer(props) {
  return (
    <EmojiRendererWrapper>
      {renderEmoji(props.children)}
    </EmojiRendererWrapper>
  );
}

export default EmojiRenderer;
