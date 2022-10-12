import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entrada-pesquisa',
  templateUrl: './entrada-pesquisa.component.html',
  styleUrls: ['./entrada-pesquisa.component.scss']
})
export class EntradaPesquisaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public list: Array<{ consentimento: string, conta: number }> = [
    { consentimento: "ABCDES21123dsadsa", conta: 11234548486 },
    { consentimento: "DABE30D0FPKDKADAD", conta: 12321353213 },
    { consentimento: "D330003ODLLDLDLDD", conta: 53039400322 }
  ]

  @Output() enviarDados = new EventEmitter();

  public dadosPesquisa: number = 0;
  public entradaConsent: string = "";
  public entradaConta: number = 0;

  constructor() { }

  obterDadosPesquisa() {
    console.log(this.dadosPesquisa);
    this.enviarDados.emit(this.list);
  }

  incluir() {
    this.list.push({ consentimento: this.entradaConsent, conta: this.entradaConta });
    this.entradaConsent = "";
    this.entradaConta = 0;
  }



}
