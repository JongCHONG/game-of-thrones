import React, { Component } from 'react';

class Character extends Component {
  render() {
    const { name, image, title } = this.props
    return (
      <div>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{title}</p>
      </div>
    );
  }
}

export default Character;