import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Character from './components/Character'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: []
    }

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { this.setState({characters: result}) }) // on détaille l'action à exécuter sur ce JSON
  }
  handleFavoriteClick(index) {
    const { fullName, title, imageUrl } = this.state.characters[index]
    const newFavorite = {
      fullName: fullName,
      title: title,
      image: imageUrl
    }

    this.setState({favorites: [...this.state.favorites, newFavorite]})
  }

  render() {
    const { characters, favorites } = this.state
    console.log(this.state)

    return (
      <div className="container py-1">
        <div className="top d-flex justify-content-between">
          <h1>Game of thrones</h1>
          {/* <button type="button" className="btn btn-outline-dark">Liste des favoris</button> */}
        </div>
        <div className="favorite"> 
          Liste des favorites : 
          <ul>
          {favorites.map((element) => {
            return <li>{element.fullName}</li>
          })}
          </ul>
        </div>
        <div className="row my-2">
          {characters.map((element, index) => {
            return (
              <Character 
                key={index}
                name={element.fullName} 
                title={element.title}
                image={element.imageUrl}
                index={index}
                handleFavoriteClick={this.handleFavoriteClick}
              />
            )
          })}

        </div>
          
      </div>
    )
  }
}

export default App