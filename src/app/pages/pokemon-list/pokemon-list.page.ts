import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.list().subscribe((response) => {
      this.pokemons = response.results;
    });
  }

  viewDetails(pokemon: Pokemon) {
    const id = pokemon.url
      .split('/')
      .filter((x) => x)
      .pop();
    this.router.navigate(['/pokemon', id]);
  }
}
