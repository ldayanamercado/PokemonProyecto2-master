import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  ListaPokemon:Pokemon[]=[];
  pokemonEncontrado: Pokemon | null = null;


  constructor(private _PokemonService:PokemonServiceService){
   

  }
  ngOnInit(): void{
    this.obtenerPokemon(); 
  }
  obtenerPokemon(){
    this._PokemonService.getPokemon().subscribe(data=>{
      console.log(data); 
      this.ListaPokemon = data; 
    }, error=>{
      console.log(error); 
    })
  }
  buscarPokemon(nombre: string) {
    this._PokemonService.getPokemonobtenerNombre(nombre).subscribe(data => {
      console.log(data);
      this.pokemonEncontrado = data;
    }, error => {
      console.log(error);
      console.log("No se encontró ningún Pokémon con el nombre especificado.");
    });
  }
  
}
