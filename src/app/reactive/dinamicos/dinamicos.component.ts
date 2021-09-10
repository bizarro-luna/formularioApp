import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {



  /**
   * Formulario la pantalla
   */
  miFormulario:FormGroup= this.fb.group({
    nombre:    [null, [Validators.required, Validators.minLength(3)]  ],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Final Fatasy', Validators.required ]
    ], Validators.required)
  });

  constructor(private fb:FormBuilder) { }


  /**
   * Valor del nuevo juego favorito, que esta fuera del formulario, pero se asicia al FormBuilder
   */
  nuevoFavorito:FormControl = this.fb.control('', Validators.required);

  /**
   * Agregar al arreglo los favoritos
   * @returns 
   */
  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }

    this.favoritosArr.push(new FormControl( this.nuevoFavorito.value ));

    this.nuevoFavorito.setValue('');

  }

  /**
   * Obtener la pripierdad de favoritos que es un arregolo del formulario
   */
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }



  /**
   * Metodo para validar campos
   */
  campoValidar(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }



  /**
   * Metodo para guardar el formulario
   * @returns 
   */
  guardar(){

    if(this.miFormulario.invalid){
      //Metodo para marcar que todos los campos del formulario fueron tocados y aparezcan los mensajes
      this.miFormulario.markAllAsTouched();
      return;
    }


    console.log(this.miFormulario.value);
    

  }


  /**
   * Metodo para eliminar del arreglo FormArray
   * @param index 
   */
  borrar(index:number){
    this.favoritosArr.removeAt(index);
  }
  

}
