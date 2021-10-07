import { useState } from 'react';
import { PokemonModel } from '../models/pokemon.model';
import { getPokemonByName } from '../services/pokemon.service';

const usePokemonSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();
  const [pokemon, setPokemon] = useState<PokemonModel>();

  const searchPokemonByName = async (name: string) => {
    try {
      name = name.toLowerCase();
      setError(null);
      setLoading(true);
      const pokemonFinded = await getPokemonByName(name);
      setPokemon(pokemonFinded);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { loading, error, pokemon, searchPokemonByName };
};

export default usePokemonSearch;
