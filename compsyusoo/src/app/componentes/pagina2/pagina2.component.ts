import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  dato:any
  result:number
  constructor() { }

  ngOnInit() {
    this.recibir()
  }
  recibir(){
    this.dato=localStorage.getItem('dato')
    this.result=2+Number(this.dato)
}
}