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
  imagenAnterior: string="";
  imagenActual: string ="";
  imagenSiguiente: string= "";
  imagenOriginal: string = "";


  constructor(private _PokemonService:PokemonServiceService){
    

  }
  ngOnInit(): void{
 
  }
  
  buscarPokemon(nombre: string) {
    console.log(nombre);
    this._PokemonService.getPokemonobtenerNombre(nombre).subscribe(data => {
      console.log(data);
    
      this.pokemonEncontrado = data;
      this.pokemonEncontrado = data;
      this.imagenOriginal = data.imagen_png1;
        this.imagenAnterior = this.pokemonEncontrado.imagen_minipng2;
        this.imagenActual = this.pokemonEncontrado.imagen_png1;
        this.imagenSiguiente = this.pokemonEncontrado.imagen_minipng3;


    }, error => {
      console.log(error);
      console.log("No se encontró ningún Pokémon con el nombre especificado.");
    });
  }
  cambiarImagenAnterior() {
    this.imagenActual = this.imagenAnterior;
  }

  cambiarImagenSiguiente() {
    this.imagenActual = this.imagenSiguiente;
  }
  restaurarImagenOriginal() {
    this.imagenActual = this.imagenOriginal;
  }
  
}
