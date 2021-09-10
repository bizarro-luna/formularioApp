import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,delay } from 'rxjs/operators';



//Servicio para realizar una validacion asincrona
@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http:HttpClient) { }


  /**
   * Metodo implementado para validar la regla de negocio a traves de un cliente http, mediante validaciones asincronas
   * @param control 
   * @returns 
   */
  validate(control :AbstractControl):Observable<ValidationErrors  | null >{
    //throw new Error('Error de validacion');

    const email= control.value;
    console.log('validador de email',email);
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
    .pipe(
      //delay(3000),
      map( resp =>{
        console.log('respuesta de servicio',resp);
        return (resp.length ===0 )?null: {emailUsado:true}
      })
    )

  }


 

}
