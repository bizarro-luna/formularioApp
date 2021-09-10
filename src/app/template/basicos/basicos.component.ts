import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  /**
   * Variable que representa el formulario
   */
  @ViewChild('miFormulario')
  miFormulario!:NgForm;


  /**
   * Valores por defecto para un template [ngModel]
   */
  initForm={
    producto:'Que onda',
    precio:0,
    existencias:10
  }


  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Metodo para validar el campo del nombre(de forma visula)
   * @returns 
   */
  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
  }


  /**
   * Metodo para validar el precio( de forma visual)
   * @returns 
   */
   precioValido():boolean{
    return this.miFormulario?.controls.precio?.invalid && this.miFormulario?.controls.precio?.touched
  }


  guardar(){
    //console.log(this.miFormulario);
    console.log('Posteo Correcto');

    //Metodo para resetear el formulario al estado inicial
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    });

    //Metodo de insercion con una rest API
  }

}
