import React, { Component } from 'react';

class Character extends Component {
  render() {
    const { name, image, title, index } = this.props

    return (
      <div className="col-lg-4 col-md-4 col-sm-4 char">
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{title}</p>
        <button onClick={() => this.props.handleFavoriteClick(index)}>
          Add to favorite
        </button>
      </div>
    )
  }
}

export default Character;