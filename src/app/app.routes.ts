import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { NgModule } from '@angular/core';
import { HdvComponent } from './hdv/hdv.component';


export const routes: Routes = [

    {'path': 'perfil',component: PerfilComponent},
    {'path': 'hdv',component: HdvComponent}    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class AppRoutingModule{}