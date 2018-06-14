import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../../components/account/account.component';

@Component({
  selector: 'app-adress-list',
  templateUrl: './adress-list.component.html',
  styleUrls: ['./adress-list.component.css']
})
export class AdressListComponent implements OnInit {

  account : AccountComponent;
  enderecoAtivo : string = null;
  endereco : string = null;

  constructor() {
    this.account = new AccountComponent();
   }

   exibeEndereco(endereco) {
     this.enderecoAtivo = endereco.nome;
     this.endereco = endereco.endereco;
   }

  ngOnInit() {
  }

}
