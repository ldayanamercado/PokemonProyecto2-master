import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import {InicioComponent} from './component/inicio/inicio.component';
import {ConsultaComponent} from './component/consulta/consulta.component';



const routes: Routes = [
  
  {path: '', redirectTo: 'InicioComponent',pathMatch :'full'},
  {path: 'InicioComponent', component: InicioComponent},
  {path: 'ConsultaComponent', component: ConsultaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
