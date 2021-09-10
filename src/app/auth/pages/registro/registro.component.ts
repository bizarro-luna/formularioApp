import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validators/validaciones';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

 





  miFormulario:FormGroup=this.fb.group({
    nombre:['',[ Validators.required, Validators.pattern(this.vs.nombreApellidoPattern) ] ],
    email:['',[ Validators.required, Validators.pattern(this.vs.emailPattern) ], [this.emailV] ],
    username:['',[ Validators.required, this.vs.noPuedeSerStrider ]  ],
    password:['',[ Validators.required, Validators.minLength(6) ]  ],
    password2:['',[ Validators.required, Validators.minLength(6) ]  ],
  },
  {
    validators:[this.vs.camposIguales('password','password2')]
  });


  /**
   * Metodo para saber el mensaje a mostrar en el campo de email ya que cuenta con varias validaciones,
   * angular lo ejecuta siempre que haya un cambio en el componente
   */
  get emailErrorMsg():string{
    const errors=this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'El correo el obligatorio';
    }else if(errors?.pattern){
      return 'El valor ingresado no tiene el formarto de correcto';
    }else if(errors?.emailUsado){
      return 'El correo ingresado ya ha sido utilizado';
    }


    return '';
  }

  constructor(private fb:FormBuilder,private vs:ValidatorsService,private emailV:EmailValidatorService) { }

  ngOnInit(  ){
    //Inicializar el formulario
    this.miFormulario.reset({
      nombre:'Hector Luna',
      email:'erick@gmail.com',
      username:'scanor',
      password:'123456',
      password2:'123456'
    })

  }



  /**
   * Metodo para validar campo
   * @param campo 
   * @returns 
   */
  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched

  }


  /**
   * Metodo para el submit del formulario
   */
  submitFormulario(){
    console.log(this.miFormulario.value);


    this.miFormulario.markAllAsTouched();

  }

  /* Metodos para un campo con diferentes tipos de validaciones
  emailExiste(){
    return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched
  }

  emailFormato(){
    return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched
  }

  emailUsado(){
    return this.miFormulario.get('email')?.errors?.emailUsado && this.miFormulario.get('email')?.touched
  }*/

  

}
