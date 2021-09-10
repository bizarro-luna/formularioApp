import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit  {

 /* miFormulario:FormGroup= new FormGroup({
    nombre     :new FormControl('RTX 4080ti'),
    precio     :new FormControl(46564),
    existencias:new FormControl(8)
  });*/

  ngOnInit(){
    /*Solo para tener de inicio los valores del formulario
    this.miFormulario.setValue({
      nombre:'Onnit',
      precio:100,
      existencias:1
    })*/
  }

  /**
   * Variable del formulario
   */
  miFormulario:FormGroup=this.fb.group({
    nombre:     [null, [Validators.required, Validators.minLength(3) ]   ],
    precio:     [null, [Validators.required, Validators.min(0) ] ],
    existencias:[null, [Validators.required, Validators.min(0) ]]
  });

  constructor(private fb:FormBuilder) { }


  validarCampo(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){


    if(this.miFormulario.invalid){
      //Metodo para saber si los campos fueron tocados
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    //metodo para resetear todos los campos del formulario
    this.miFormulario.reset();

  }

  

}
