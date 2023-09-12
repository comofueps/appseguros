import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonaComponent } from './components/personas/list-persona/list-persona.component';
import { ListDocumentoComponent } from './components/documentos/list-documento/list-documento.component';
import { ListVehiculoComponent } from './components/vehiculos/list-vehiculo/list-vehiculo.component';
import { ListInvolucrarComponent } from './components/involucrar/list-involucrar/list-involucrar.component';
import { ListMultasComponent } from './components/multas/list-multas/list-multas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: 'personas',
    component: ListPersonaComponent
  },
  {
    path: 'documentos',
    component: ListDocumentoComponent
  },
  {
    path: 'vehiculos',
    component: ListVehiculoComponent
  },

  {
    path: 'involucrar',
    component: ListInvolucrarComponent
  },

  {
    path: 'multas',
    component: ListMultasComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
