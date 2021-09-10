import { Component, OnInit } from '@angular/core';



interface Persona{
  nombre:string;
  favoritos:Favorito[];
}

interface Favorito{

  id:number;
  nombre:string;

}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

 
  nuevoJuego:string='';

  persona:Persona={
    nombre:"Erick",
    favoritos:[
      {id:1,nombre:'Final Fantasy'},{id:2,nombre:'Metal Guear'}
    ]
  }


  /**
   * Añadir elementos
   */
  guardar(){
    console.log('formulario posteado')



  }


  /**
   * Metodo para agregar juegos al arreglo
   * @returns 
   */
  agregarJuego(){

    if(this.nuevoJuego.trim().length===0){
      return;
    }

    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';
  }

  /**
   * Metodo para eliminar un elemento de la lista
   * @param id 
   */
  eliminar(id:number):void{

    this.persona.favoritos.splice(id,1);
  }

}
