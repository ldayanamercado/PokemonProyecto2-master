import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
 
  pokemonEncontrado!: Pokemon;
  nombreBuscar: string  = "";


  constructor(private _PokemonService:PokemonServiceService){
   

  }
  ngOnInit(): void{
 
  }
  
  buscarPokemon(nombre: string) {
    console.log(nombre);
    this._PokemonService.getPokemonobtenerNombre(nombre).subscribe(data => {
      console.log(data);
    
      this.pokemonEncontrado = data;
    }, error => {
      console.log(error);
      console.log("No se encontró ningún Pokémon con el nombre especificado.");
    });
  }
  
}
