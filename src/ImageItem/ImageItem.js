import React, { Component } from 'react';

export default class ImageItem extends Component {
    defaultImage(e) {
        e.target.src = "frenchhorn.jpg";
        e.target.onError = null;
    }
    render() {
        return (
            <div className = "image-item">
                <img className = "horn-image" alt = {this.props.description} src = {this.props.image} onError = {this.defaultImage}/>
                <p>{this.props.title}</p>
            </div>
        )
    }
}