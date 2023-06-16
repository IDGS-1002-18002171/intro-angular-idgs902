import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  num1:string="";
  num2:string="";
  resultado:number=0;
  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }
}
