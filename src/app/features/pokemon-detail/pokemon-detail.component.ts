import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../interfaces/pokemon.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, 
    MatCardModule,
    MatListModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
  providers:[
    PokemonService]
})
export class PokemonDetailComponent  implements OnInit {
  name: string = '';
  pokemonDetail:PokemonDetail | undefined;
  constructor(private route: ActivatedRoute,private pokemonService:PokemonService) {}

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    this.name = this.route.snapshot.paramMap.get('name') ?? '';
    this.getAllPokemonDetail();
  }

  
  private getAllPokemonDetail():void {
    this.pokemonService.getPokemonDetail(this.name).subscribe({
      next: (response: PokemonDetail) => {
        this.pokemonDetail = response;
        console.log(this.pokemonDetail);
      },
      error: (error: any) => {
        console.error(Error, error);
      },
      complete: () => {
        // TODO;
      },
    });
  }
}
