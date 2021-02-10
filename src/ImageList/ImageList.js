import React, { Component } from 'react';
import ImageItem from '../ImageItem/ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (
            this.props.imageData.map(imageObj => <ImageItem description = {imageObj.description} image = {imageObj.url}/>)
        )
    }
}