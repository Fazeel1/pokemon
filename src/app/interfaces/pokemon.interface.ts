
  export interface PokemonListApiResponse {
    success: boolean;
    results: any;
  }

  export interface PokemonDetailApiResponse {
    name: string;
    url: string;
  }
  export interface PokemonList {
    name: string;
    url: string;
  }


  export interface PokemonDetail {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: NamedAPIResource[];
    game_indices: GameIndex[];
    held_items: HeldItem[];
    location_area_encounters: string;
    moves: Move[];
    species: NamedAPIResource;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    cries: Cries;
  }
  
  export interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
  }
  
  export interface NamedAPIResource {
    name: string;
    url: string;
  }
  
  export interface GameIndex {
    game_index: number;
    version: NamedAPIResource;
  }
  
  export interface HeldItem {
    item: NamedAPIResource;
  }
  
  export interface Move {
    move: NamedAPIResource;
  }
  
  export interface Sprites {
    latest: string;
    legacy: string;
  }
  
  export interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
  }
  
  export interface Type {
    slot: number;
    type: NamedAPIResource;
  }
  
  export interface Cries {
    latest: string;
    legacy: string;
  }
  