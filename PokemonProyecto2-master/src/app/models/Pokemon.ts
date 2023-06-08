export class Pokemon{
    id: number; 
    nombre: string; 
    altura: number;
    anchura: number; 
    habilidades_nombre :string[];
    imagen_frente1: string;
    imagen_atras1:string;
    imagen_frente2:string;
    imagen_atras2:string;

    constructor(
        id: number, 
        nombre: string,
        altura: number,
        anchura: number, 
        habilidades_nombre :string[],
        imagen_frente1: string,
        imagen_atras1:string,
        imagen_frente2:string,
        imagen_atras2:string,
        ){
        this.id = id; 
        this.nombre = nombre; 
        this.altura = altura; 
        this.anchura = anchura; 
        this.habilidades_nombre = habilidades_nombre; 
        this.imagen_frente1 = imagen_frente1; 
        this.imagen_atras1 = imagen_atras1; 
        this.imagen_frente2 = imagen_frente2; 
        this.imagen_atras2 = imagen_atras2;   
    }
}