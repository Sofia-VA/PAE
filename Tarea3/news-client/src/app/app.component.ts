import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public titulo: string = "Hola mundo";
  // Después de 3 segundos quieres que el binder le diga al titulo que se cambie
  // constructor() {
  //   // Se usa una función de flecha para usar el this.titulo, respeta contexto
  //   setTimeout(() => {
  //     this.titulo = "Que tal";
  //   }, 3000) //Tres segundos después de que se construya la clase
  // }
}
