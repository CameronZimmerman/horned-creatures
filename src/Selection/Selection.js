import React, { Component } from 'react';

export default class Selection extends Component {
    imageDataArray = this.props.imageData;
    imagePropertyArray = Array.from(new Set(this.imageDataArray.map(imageObj => imageObj[this.props.property])));
    render() {
        return (
            <select name = {this.props.selectionName} onChange = {this.props.stateHandler}>
            {
                this.imagePropertyArray.map(imageProperty => <option value = {imageProperty}>{imageProperty}</option>)
            }
            </select>
        )
    }
}