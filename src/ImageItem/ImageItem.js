import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return (
            <img alt = {this.props.description} src = {this.props.image} />
        )
    }
}