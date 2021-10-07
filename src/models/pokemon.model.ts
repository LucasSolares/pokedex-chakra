import { SpritesModel } from './sprites.model';
import { Stat } from './stat.model';

export interface PokemonModel {
    id: number;
    name: string;
    weight: number;
    order: number;
    stats: Stat[];
    sprites: SpritesModel;
}