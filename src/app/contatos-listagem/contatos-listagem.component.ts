import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos = [
    { id: 1, nome:"Charles Guerreiro"},
    { id: 2, nome:"Matheus Motoca"},
    { id: 3, nome:"Bruno Internet"},
    { id: 4, nome:"Flavio Bolsonaro"},
  ];

  nomeEmpresa:string;
  constructor() {
    this.nomeEmpresa = "UNA Betimg";
  }

  ngOnInit(): void {
  }

}
