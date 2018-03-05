import React, { Component } from 'react';
import SearchBar from '../components/search_bar';
import HeaderNav from '../components/header';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <SearchBar />
      </div>
    );
  }
}
