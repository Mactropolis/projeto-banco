import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet>
  <app-entrada-pesquisa (enviarDados)="setDados($event)"></app-entrada-pesquisa>
  <app-resultado-pesquisa [pesquisa]="getDados"></app-resultado-pesquisa>
  </router-outlet>`,
})
export class AppComponent {
  title: string = "entrada"
  public getDados: Array<{ consentimento: string, conta: number }> = [];

  public setDados(event: Array<{ consentimento: string, conta: number }>) {
    this.getDados = event;
    console.log(this.getDados)
  }


}





