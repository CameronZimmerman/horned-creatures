import './App.css';
import data from './data.js';
import React, { Component } from 'react';
import ImageList from './ImageList/ImageList.js';
import Selection from './Selection/Selection.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <section className = "selection Form">
          <form>
            <Selection selectionName = "Keyword" property = "keyword" imageData = {data}/>
            <Selection selectionName = "Horns" property = "horns" imageData = {data}/>
          </form>
        </section>
        <ImageList imageData = {data} />
      </div>
    )
  }
  
};
