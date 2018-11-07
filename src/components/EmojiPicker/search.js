import React, { Component } from 'react';
import css from 'react-emotion';
const SearchWrapper = css('div')`
  padding: 5px;
  border: 1px solid #d9d9d9;
  margin-top: 10px;
  border-radius: 5px;
`;

const Input = css('input')`
  border: none;
  outline: none;
  width: 100%;
  font-size: 12px;
`;

class Header extends Component {
  render() {
    return (
      <SearchWrapper>
        <Input placeholder="search" />
      </SearchWrapper>
    );
  }
}

export default Header;
