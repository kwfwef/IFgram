import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/component/login/login.component';
import { AlunosComponent } from 'src/app/component/alunos/alunos.component';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { ProfessoresComponent } from 'src/app/component/professores/professores.component';


const routas:Routes = [
  { path:'',component:NavbarComponent,children:[
    {path: '',component:AlunosComponent},
    { path: 'professores', component:ProfessoresComponent}
  ]},
  { path: 'accounts/login', component:LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      routas,
      { enableTracing: true }
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class RoutasModule { }
