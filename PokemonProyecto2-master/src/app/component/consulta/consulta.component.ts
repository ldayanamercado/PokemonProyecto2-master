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
  pokemonSeleccionado: any = null;


  constructor(private _PokemonService:PokemonServiceService){
   

  }
  ngOnInit(): void{
    this.obtenerPokemon(); 
    this. buscarPokemon(this.pokemonSeleccionado);
  }

 

  obtenerPokemon() {
    this._PokemonService.getPokemon().subscribe(
      (data: Pokemon[]) => {
        console.log(data);
        this.ListaPokemon = this.ordenarPorSeleccion(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  ordenarPorSeleccion(data: Pokemon[]) {
    for (let i = 0; i < data.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < data.length; j++) {
        const idA = data[j].id;
        const idMin = data[minIndex].id;
        if (idA < idMin) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [data[i], data[minIndex]] = [data[minIndex], data[i]];
      }
    }
    return data;
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
  verpokemon(pokemonEncontrado: any){
    console.log("Modal sI");
    this.pokemonSeleccionado = pokemonEncontrado
    console.log(this.pokemonSeleccionado);

  }

  getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  
}
