import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {


  miFormulario:FormGroup=this.fb.group({
    genero:['M',Validators.required],
    notificaciones:[true, Validators.required],
    condiciones:[false,Validators.requiredTrue]
  });

  persona={
    genero:'F',
    notificaciones:true
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    //Para establecer un valor al formulario siempre y cuando coincidan los nombres del objeto y del formulario
    // this.miFormulario.setValue(this.persona);
    this.miFormulario.reset({ 
      ...this.persona,
    condiciones:false});

    //Para saber cuando se hicieron cambios en el formulario
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...resto }) => {
      //delete form.condiciones;
      this.persona=resto;
    } );


    /*Ver cuando cambio el valor de condiciones
    this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue =>{
      console.log(newValue);
    });*/



  }

  guardar(){

    //Obtiene el valor del formulario en formato json, para enviar al back end
    const formValue={...this.miFormulario.value};

    //la palabra reservada delete elimina un campo del formulario
    delete formValue.condiciones;
    
    console.log(formValue);

  }

  

}
