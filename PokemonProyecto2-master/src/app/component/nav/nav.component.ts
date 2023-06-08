import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
ListaPokemon:Pokemon[]=[];
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
}
