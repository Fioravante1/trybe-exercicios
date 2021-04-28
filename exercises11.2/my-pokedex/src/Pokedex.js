import React, { Component } from 'react';
import Pokemon from './Pokemon';


class Pokedex extends Component {
  render() {
    return (
      <div>
        {this.props.pokemons.map(pokemon => <Pokemon Key={pokemon.id} pokemons={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;