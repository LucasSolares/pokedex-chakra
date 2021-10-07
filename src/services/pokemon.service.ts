import Axios from 'axios';
import { BASE_URL } from '../consts/pokeapi.const';
import { PokemonModel } from '../models/pokemon.model';

export const ENPOINT = 'pokemon';

export const getPokemonByName = async (name: string) => {
  const { data } = await Axios.get<PokemonModel>(`${BASE_URL}/${ENPOINT}/${name}`);
  return data;
};
