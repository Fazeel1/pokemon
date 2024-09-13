import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { 
  PokemonDetail,
  PokemonListApiResponse, 
} from '../interfaces/pokemon.interface';
import { ApiConfig } from '../shared/constants/api-config';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  
  getPokemonList(offset: number = 0, limit: number = 20): Observable<PokemonListApiResponse> {
    const url = `${ApiConfig.get}?offset=${offset}&limit=${limit}`;
    return this.http.get<PokemonListApiResponse>(url);
  }

  getPokemonDetail(name: string): Observable<PokemonDetail> {
    const url = `${ApiConfig.details}/${name}`;
    return this.http.get<PokemonDetail>(url);
  }

}
