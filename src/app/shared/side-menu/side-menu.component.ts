import { Component } from '@angular/core';


interface MenuItem{
  texto:string;
  ruta :string;

}


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [

    `
    li{
      cursor:pointer;
    }

    `
  ]
})
export class SideMenuComponent  {

 
  /**
   * Arreglo para menu Item de template
   */
  templateMenu:MenuItem[]=[

    {
      texto:'Básicos',
      ruta :'./template/basicos'
    },
    {
      texto:'Dinamicos',
      ruta :'./template/dinamicos'
    },
    {
      texto:'Switches',
      ruta :'./template/switches'
    }

  ];


  /**
   * Arreglo para menu Item de Reactive
   */
  reactiveMenu:MenuItem[]=[

    {
      texto:'Básicos',
      ruta :'./reactive/basicos'
    },
    {
      texto:'Dinamicos',
      ruta :'./reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta :'./reactive/switches'
    }

  ];


  /**
   * Arreglo para menu de auth
   */
  authMenu:MenuItem[]=[
    {
      texto:'Registro',
      ruta:'./auth/registro'
    },
    {
      texto:'Login',
      ruta:'./auth/login'
    }
  ]

}
