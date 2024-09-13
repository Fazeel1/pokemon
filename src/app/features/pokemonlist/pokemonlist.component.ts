import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import {
  PokemonList,
  PokemonListApiResponse,
} from '../../interfaces/pokemon.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Error, MinusIndex } from '../../shared/constants/common.constants';

@Component({
  selector: 'app-pokemonlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatPaginator,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css'],
  providers: [PokemonService],
})
export class PokemonlistComponent implements OnInit {
  displayedColumns: string[] = ['name', 'favorite'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemonList();
  }

  private getAllPokemonList(): void {
    const offset = 20;
    const limit = 20;
    this.pokemonService.getPokemonList(offset, limit).subscribe({
      next: (response: PokemonListApiResponse) => {
        this.dataSource.data = response.results;
        this.dataSource.paginator = this.paginator;
        this.loadFavorites(); // Update favorites status after data is set
      },
      error: (error: any) => {
        console.error(Error, error);
      },
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleFavorite(pokemon: PokemonList): void {
    let favorites = this.getFavorites();
    const index = favorites.indexOf(pokemon.name);

    if (index === MinusIndex) {
      favorites.push(pokemon.name);
    } else {
      favorites.splice(index, 1);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.loadFavorites(); // Update the UI after toggling
  }

  private getFavorites(): string[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  private loadFavorites(): void {
    const favorites = this.getFavorites();
    this.dataSource.data = this.dataSource.data.map((pokemon: PokemonList) => ({
      ...pokemon,
      isFavorite: favorites.includes(pokemon.name),
    }));
  }
}
