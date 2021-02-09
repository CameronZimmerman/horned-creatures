import React, { Component } from 'react';
import ImageItem from '../ImageItem/ImageItem.js';

export default class ImageList extends Component {
    imageArray = this.props.imageData;

    render() {
        return (
            this.imageArray.map(imageObj => <ImageItem description = {imageObj.description} image = {imageObj.url}/>)
        )
    }
}