import React, { Component } from 'react'

class Continents extends Component {
  constructor() {
    super()

    this.state = {
      continents: []
    }
  } 

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Continents")
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { this.setState({continents: result}) }) // on détaille l'action à exécuter sur ce JSON
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <h2>Continents</h2>
        <ul>
          {this.state.continents.map((element, index) => {
            return <li key={index}>{element.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Continents