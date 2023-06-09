import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  API_URL='http://localhost:4001/api/pokemon/habilidades/';


  constructor( private http:HttpClient) { }

  getPokemon(): Observable <Pokemon[]>{
    return this.http.get<Pokemon[]>(this.API_URL).pipe(
      tap(_ => console.log('Datos Encontrado')),
      catchError(error =>{
        console.log("error al buscar")
        return of(error as Pokemon[])
      })
      );
  }

  getPokemonobtenerNombre(nombre:string): Observable <Pokemon>{
    return this.http.get<Pokemon>(this.API_URL+'nombre/'+nombre).pipe(
      tap(_ => console.log('Nombre del Pokemon Encontrado')),
      catchError(error =>{
        console.log("error al buscar")
        return of(error as Pokemon)
      })
      );
  }
  getPokemonobtenerTipo(tipo:string): Observable <Pokemon>{
    return this.http.get<Pokemon>(this.API_URL+'tipo/'+tipo).pipe(
      tap(_ => console.log('Nombre del Pokemon Encontrado')),
      catchError(error =>{
        console.log("error al buscar")
        return of(error as Pokemon)
      })
      );
  }
  getPokemonobtenerHabilidad(habilidad:string): Observable <Pokemon>{
    return this.http.get<Pokemon>(this.API_URL+'habilidad/'+habilidad).pipe(
      tap(_ => console.log('Nombre del Pokemon Encontrado')),
      catchError(error =>{
        console.log("error al buscar")
        return of(error as Pokemon)
      })
      );
      
  }



  



}
