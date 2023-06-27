import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!:string;
  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
  alumnosIric:IAlumnosIric[]=[
{
      matricula:1234,
      nombre:'pedro',
      edad:23,
      correo:'pedro@gmail.com',
      foto:'https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_2791022.webp?w=1150&h=647&p=righttop',
      calif:6.7
    },
    {
      matricula:772,
      nombre:'paulina',
      edad:23,
      correo:'paulina@gmail.com',
      foto:'https://cdn0.ecologiaverde.com/es/posts/7/7/4/animales_que_viven_en_el_campo_3477_orig.jpg',
      calif:8.4
    },
    {
      matricula:342,
      nombre:'Dario',
      edad:32,
      correo:'dario@gmail.com',
      foto:'https://okdiario.com/img/2020/02/09/jeff-griffith-zqypm8i60f8-unsplash1-655x368.jpg',
      calif:3.5
    }
  ]
  onCalificaClick(message:string){
    this.alumnoTitle=`${message}`
  }
}
