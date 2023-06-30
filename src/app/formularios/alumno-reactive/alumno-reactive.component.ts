import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAlumnosIric } from 'src/app/utl/alumnos-iric';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  alumnos:IAlumnosIric[]=[];
  alumnosForm!:FormGroup;
  constructor(private readonly fb:FormBuilder){
    this.alumnosForm=this.initForm();
  }

  onSubmit():void{
    /* console.log('Form-> ',this.alumnosForm.value) */
    this.obtenerValor();
  }

  obtenerValor():void{
    const mat=this.alumnosForm.get('matricula')?.value;
    const nom=this.alumnosForm.get('nombre')?.value;
    const eda=this.alumnosForm.get('edad')?.value;
    const cor=this.alumnosForm.get('correo')?.value;
    const fot=this.alumnosForm.get('foto')?.value;
    const cal=this.alumnosForm.get('calif')?.value;
    this.alumnos.push({matricula:mat,
      nombre:nom,
      edad:eda,
      correo:cor,
      foto:fot,
      calif:cal});
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['',[Validators.required,Validators.minLength(3)]],
      nombre:['',[Validators.required]],
      edad:[''],
      correo:['',[Validators.required]],
      foto:[''],
      calif:['']
    });
  }
}
