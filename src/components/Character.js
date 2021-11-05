import React, { Component } from 'react';

class Character extends Component {
  render() {
    const { id, name, image, title, index, inFavoritesList } = this.props
    // console.log(inFavoritesList)
    return (
      <div className="col-lg-4 col-md-4 col-sm-4 char">
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{title}</p>
        {inFavoritesList ?         
          <button onClick={() => this.props.handleDeleteFavoriteClick(id)}>
            Supprimer
          </button>
        : 
          <button onClick={() => this.props.handleFavoriteClick(index)}>
            Add to favorite
          </button>}
      </div>
    )
  }
}

export default Character;