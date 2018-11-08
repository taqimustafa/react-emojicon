import React from 'react';
import css from 'react-emotion';
import { connect } from 'react-redux';

const FooterIcon = css('div')`
  padding: 15px 10px;
`;

const ActiveEmoji = css('div')`
  
`;
const EmojiIcon = css('img')`

`;
const Details = css('div')`

`;
const Name = css('div')`

`;
const Key = css('div')`

`;

function Footer(props) {
  const activeEmoji = props.emojis[props.emoji.activeEmoji];
  if(props.emoji.activeEmoji !== null) {
    return (
      <FooterIcon>
        <ActiveEmoji>
          <EmojiIcon
            src={require(`../../assets/images/apple/${activeEmoji.image}`)}
          />
          <Details>
            <Name>{activeEmoji.name}</Name>
            <Key>{props.emoji.activeEmoji}</Key>
          </Details>
        </ActiveEmoji>
      </FooterIcon>
    );
  }
  return null;
}


const mapStateToProps = (state) => {
  return {
    emoji: state.emoji,
  };
}


const FooterContainer = connect(
  mapStateToProps,
)(Footer)

export default FooterContainer;