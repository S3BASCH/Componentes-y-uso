import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';

const routes: Routes = [
  {
    path:'Pagina 1', component:Pagina1Component
  },
  {
    path:'Pagina 2',component:Pagina2Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
