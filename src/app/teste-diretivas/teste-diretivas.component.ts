import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-diretivas',
  templateUrl: './teste-diretivas.component.html',
  styleUrls: ['./teste-diretivas.component.css']
})
export class TesteDiretivasComponent {

  ultimoId = 0;
  nome = "";
  listaPessoas: any = [];

  adicionar() {
    this.listaPessoas.push(
      {
        id: ++this.ultimoId,
        nome: this.nome
      }
    );
  }

  constructor() { }

}
