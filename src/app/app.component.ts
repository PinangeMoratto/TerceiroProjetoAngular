import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'terceiroprojeto';

  mostrar: boolean = true;

  inverter(){
    this.mostrar = !this.mostrar;
  }

}
