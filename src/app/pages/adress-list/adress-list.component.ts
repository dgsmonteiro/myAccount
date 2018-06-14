import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountComponent } from '../../components/account/account.component';
import { AgmMap } from '@agm/core';



@Component({
  selector: 'app-adress-list',
  templateUrl: './adress-list.component.html',
  styleUrls: ['./adress-list.component.css']
})
export class AdressListComponent implements OnInit {

  @ViewChild('map') map: AgmMap;

  account : AccountComponent;
  enderecoAtivo : string = null;
  endereco : string = null;
  lat: number = null;
  lng: number = null;
  zoom: number = 15;


  constructor() {
    this.account = new AccountComponent();
    this.exibeEndereco(this.account.address[0]);
   }
   ngOnInit() {

   }


   ngAfterViewInit() {
    console.log(this.map);
    this.resizeMap();
  }
  resizeMap() {
    this.map.triggerResize();
  }
  exibeEndereco(endereco) {
    this.enderecoAtivo = endereco.nome;
    this.endereco = endereco.endereco;
    this.lat = endereco.latitude;
    this.lng = endereco.longitude;
  }

}
