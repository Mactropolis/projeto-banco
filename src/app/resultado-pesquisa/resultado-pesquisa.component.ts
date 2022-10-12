import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrls: ['./resultado-pesquisa.component.scss']
})
export class ResultadoPesquisaComponent implements OnInit {
  
  @Input() public pesquisa: Array<{ consentimento: string, conta: number }> = [];


  constructor() { }

  ngOnInit(): void {
  }

}
