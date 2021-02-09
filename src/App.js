import './App.css';
import data from './data.js';
import React, { Component } from 'react';
import ImageList from './ImageList/ImageList.js';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageList imageData = {data} />
      </div>
    )
  }
  
};
