import React from 'react';
import css from 'react-emotion';
import { connect } from 'react-redux';
import { activeEmoji } from '../../action';

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

function Emojis(props) {
  return (
    <EmojiWrapper>
      <CategoryListContainer>
        {Object.keys(props.categories).map((category) => (
          <CategoryContainer key={category}>
            <CategoryHeading>
              {category}
            </CategoryHeading>
            <EmojiListContainer>
              {props.categories[category].map((emoji) => (
                <EmojiListItem 
                  key={emoji}
                  onMouseEnter={() => { props.activeEmoji(emoji); }}
                  onMouseLeave={() => { props.activeEmoji(null); }}
                >
                  <Emoji
                    data-key={emoji}
                    data-name={props.emojis[emoji].name}
                    image={props.emojis[emoji].image}
                    src={require(`../../assets/images/apple/${props.emojis[emoji].image}`)}
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

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = {
  activeEmoji,
}

const EmojisContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Emojis)

export default EmojisContainer;
