import './App.css';
import data from './data.js';
import React, { Component } from 'react';
import Header from './Header/Header.js';
import ImageList from './ImageList/ImageList.js';
import Selection from './Selection/Selection.js';

export default class App extends Component {
  state = {
    keyword: '',
    horns: ''
  }

  handleKeywordChange = (e) => {
    const value = e.target.value;
    this.setState({
      keyword: value
    });
    return value;
  }

  handleHornChange = (e) => {
    const value = e.target.value;
    this.setState({
      horns: value
    });
    return value;
  }
  
  render() {
    const keyWordFilterData = data.filter((dataObj) => {
      if (this.state.keyword === '') return true;
      if(this.state.keyword === dataObj.keyword) return true;
      return false;
    });
    const keyWordAndHornFilterData = keyWordFilterData.filter((filterDataObj) => {
      if (this.state.horns === '') return true;
      if (this.state.horns == filterDataObj.horns) return true; //eslint-disable-line
      return false;
    });
    console.log(keyWordAndHornFilterData);
    return (
      <div className="App">
        <Header />
        <section className = "selection Form">
          <form>
            <Selection value = {this.handleKeywordChange} selectionName = "Keyword" property = "keyword" imageData = {data} stateHandler = {this.handleKeywordChange}/>
            <Selection value = {this.handleHornChange} selectionName = "Horns" property = "horns" imageData = {data} stateHandler = {this.handleHornChange}/>
          </form>
        </section>
        <ImageList imageData = {keyWordAndHornFilterData} />
      </div>
    )
  }
  
};
