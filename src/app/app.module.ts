import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { RoutasModule } from './router/routas.module';
import { AlunosComponent } from './component/alunos/alunos.component';
import { ProfessoresComponent } from './component/professores/professores.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AlunosComponent,
    ProfessoresComponent
  ],
  imports: [
    BrowserModule,
    RoutasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
