import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {
  resultado:any;
  suma:number
  dato:number
  array=[23,12,45,41,89]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  almacenar(){
    localStorage.setItem('dato',this.dato.toString())
  }
  
  recuperar(){
    this.resultado=localStorage.getItem('dato')
    this.suma=2+Number(this.resultado)
  }
  
  
    navegar(){
      this.router.navigate(['Pagina 2'])
    }
}
