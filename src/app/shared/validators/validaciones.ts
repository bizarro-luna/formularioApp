import { FormControl } from "@angular/forms";

 

//El export es para indicar que la variable sera exportada a otras clases
 export const nombreApellidoPattern:string='([a-zA-Z]+) ([a-zA-Z]+)';
 export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

 //se cambia a una funcion de tipo flecha
 export const noPuedeSerStrider = (control:FormControl) =>  {
    const valor:string=control.value?.trim().toLowerCase();
    console.log(valor);
    if(valor==='strider'){
      //return Error!! regresar un objeto es considerado un error
      return {
        noStrider:true
      }
    }

    //Si regresa un null significa que todo esta bien
    return null;
  }



 //Mover este metodo validacion personalizada
 /*noPuedeSerStrider(control:FormControl){
    const valor:string=control.value?.trim().toLowerCase();
    console.log(valor);
    if(valor==='strider'){
      //return Error!! regresar un objeto es considerado un error
      return {
        noStrider:true
      }
    }

    //Si regresa un null significa que todo esta bien
    return null;
  }*/