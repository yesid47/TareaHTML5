import { Component, OnInit } from '@angular/core';
import{Estudiante} from '../../domain/estudiante';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  estudiantes : Estudiante[] = [
    { codigo:1,nombre: 'Adrian',apellido:'Ramirez',nota:5.0},
    { codigo:2,nombre: 'Juan',apellido:'Pelaez',nota:4.0},
    { codigo:3,nombre: 'Mateo',apellido:'Pelaez',nota:3.0},
    { codigo:4,nombre: 'Pablo',apellido:'Pelaez',nota:2.0},
    { codigo:5,nombre: 'Alejandro',apellido:'Pelaez',nota:1.0},
    { codigo:6,nombre: 'Yeison',apellido:'Pelaez',nota:4.5},
    { codigo:7,nombre: 'Melany',apellido:'Pelaez',nota:2.8},
    { codigo:8,nombre: 'Maritza',apellido:'Pelaez',nota:2.9},
    { codigo:9,nombre: 'Sofia',apellido:'Pelaez',nota:4.6},
    { codigo:10,nombre: 'Angie',apellido:'Pelaez',nota:1.5}
];

isHabilitado: boolean = false;
fecha = new Date();


constructor() { }

ngOnInit(): void {
}

mostrar(): void{
  if(this.isHabilitado){
    this.isHabilitado=false;
  }
  else{
    this.isHabilitado=true;
  }
}

}
