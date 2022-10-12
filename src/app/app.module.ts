import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaPesquisaComponent } from './entrada-pesquisa/entrada-pesquisa.component';
import { ResultadoPesquisaComponent } from './resultado-pesquisa/resultado-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaPesquisaComponent,
    ResultadoPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
