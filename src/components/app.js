import React, { Component } from 'react';
import SearchBar from '../components/search_bar';

const API_KEY = 'AIzaSyB5uyqZA7adP4JYXtSv4F89gR-SAzhgi6U';

export default class App extends Component {
  render() {
    return (
      // <div>Redux Simple Starter</div>
      <div className="container"><SearchBar /></div>
    );
  }
}
