import React from 'react';
import css from 'react-emotion';
import ClockIcon from '../../assets/images/icons/clock.svg';
const HeaderWrapper = css('div')`
  margin: 0px;
  padding: 0px;
  height: 40px;
`;

const ListWrapper = css('ul')`
  padding: 0px;
  margin: 0px;
  height: 100%;
`;

const ListItem = css('li')`
  margin: 0px;
  height: 100%;
  list-style-type: none;
  display: inline-block;
  width: 11.11%;
  padding: 12px 0px;
  text-align: center;
`;

const Icon = css('img')`
  width: 18px;
  height: 18px;
  display: block;
  margin: auto;
`;


function Header(props) {
  return (
    <HeaderWrapper>
      <ListWrapper>
        <ListItem>
          <Icon src={ClockIcon} alt="clock" />
        </ListItem>
        <ListItem>
          <Icon src={ClockIcon} alt="clock" />
        </ListItem>
        <ListItem>
          <Icon src={ClockIcon} alt="clock" />
        </ListItem>
        <ListItem>
          <Icon src={ClockIcon} alt="clock" />
        </ListItem>
        <ListItem>
          <Icon src={ClockIcon} alt="clock" />
        </ListItem>
        <ListItem>
          <Icon src={ClockIcon} alt="clock" />
        </ListItem>
        <ListItem>
          <Icon src={ClockIcon} alt="clock" />
        </ListItem>
        <ListItem>
          <Icon src={ClockIcon} alt="clock" />
        </ListItem>
        <ListItem>
          <Icon src={ClockIcon} alt="clock" />
        </ListItem>
      </ListWrapper>
    </HeaderWrapper>
  );
}

export default Header;
