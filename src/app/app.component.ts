import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Titulo';
  
  valor1:boolean;
  valor2:boolean;
  color:string;
  diasSemana:any
  
  constructor(){

    this.valor1=  false
    this.valor2 = true
    this.color ='';
  }

}
