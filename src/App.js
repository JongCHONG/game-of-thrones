import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Character from './components/Character'
import Continents from './components/Continents'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: [],
      onglets: "personnages"
    }

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.handleDeleteFavoriteClick = this.handleDeleteFavoriteClick.bind(this)
    this.handleOnglets = this.handleOnglets.bind(this)
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { this.setState({characters: result}) }) // on détaille l'action à exécuter sur ce JSON
  }
  handleFavoriteClick(index) {
    const { fullName, title, imageUrl, id } = this.state.characters[index]
    const newFavorite = {
      id: id,
      fullName: fullName,
      title: title,
      image: imageUrl,
    }

    this.setState({favorites: [...this.state.favorites, newFavorite]})
  }
  handleDeleteFavoriteClick(id) {
    console.log(id)
    const array = [...this.state.favorites]
    array.splice(id, 1)
    this.setState({favorites: array})
  }
  handleOnglets(str) {
    this.setState({onglets: str})
  }

  render() {
    const { characters, favorites, onglets } = this.state
    console.log(this.state)

    return (
      <div className="container py-1">
        <div className="top d-flex justify-content-between">
          <h1>Game of thrones</h1>
          <button onClick={() => this.handleOnglets("personnages")} type="button" className="btn btn-outline-dark">Personnages</button>
          <button onClick={() => this.handleOnglets("continents")} type="button" className="btn btn-outline-dark">Continents</button>
        </div>
        {onglets === "personnages" ? 
          <>
            {/* Personnages */}
            <div className="favorite"> 
              Liste des favorites : 
              <ul>
              {favorites.map((element, index) => {
                return <li key={index}>{element.fullName}</li>
              })}
              </ul>
            </div>
            <div className="row my-2">
              {characters.map((element, index) => {
                const inFavoritesList = favorites.some(like => like.id === element.id)
                return (
                  <Character 
                    id={element.id}
                    key={index}
                    name={element.fullName} 
                    title={element.title}
                    image={element.imageUrl}
                    index={index}
                    handleFavoriteClick={this.handleFavoriteClick}
                    handleDeleteFavoriteClick={this.handleDeleteFavoriteClick}
                    inFavoritesList={inFavoritesList}
                  />
                )
              })}
            </div>
            {/* Fin du personnages */}
          </> 
        : 
          <Continents />
        }
      </div>
    )
  }
}

export default App