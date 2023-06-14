export class Pokemon{
    id: number; 
    nombre: string; 
    altura: number;
    anchura: number; 
    habilidades_nombre :string[];
    imagen_svg: string;
    
    imagen_png1:string;
    imagen_minipng2:string;
    imagen_minipng3:string;
    tipos_nombre : string[];
    estatisticas: number[];

    

    constructor(
        id: number, 
        nombre: string,
        altura: number,
        anchura: number, 
        habilidades_nombre :string[],
        imagen_svg: string,
        imagen_png1:string,
        imagen_minipng2:string,
        imagen_minipng3:string,
        tipos_nombre : string[],
        estatisticas: number[],
        ){
        this.id = id; 
        this.nombre = nombre; 
        this.altura = altura; 
        this.anchura = anchura; 
        this.habilidades_nombre = habilidades_nombre; 
        this.imagen_svg =  imagen_svg; 
        this.imagen_png1 = imagen_png1; 
        this.imagen_minipng2 = imagen_minipng2; 
        this.imagen_minipng3 = imagen_minipng3;   
        this.tipos_nombre = tipos_nombre;
        this.estatisticas = estatisticas;
       
    }
}