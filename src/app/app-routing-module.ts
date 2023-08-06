import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { GaleriaPrincipalComponent } from './pages/galeria-principal/galeria-principal.component';
import { ImagenCompletaComponent } from './components/imagen-completa/imagen-completa.component';

const routes: Routes = [
  {path:'', component: GaleriaPrincipalComponent},
  {path:':id', component:ImagenCompletaComponent},
  {path:'**', redirectTo: '', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }