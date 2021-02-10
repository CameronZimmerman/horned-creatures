import React, { Component } from 'react';

export default class ImageItem extends Component {
    defaultImage(e) {
        e.target.src = "frenchhorn.jpg";
        e.target.onError = null;
    }
    render() {
        return (
            <img className = "horn-image" alt = {this.props.description} src = {this.props.image} onError = {this.defaultImage}/>
        )
    }
}