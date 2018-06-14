import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../../components/account/account.component';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  account : AccountComponent;


  constructor() { 
    this.account = new AccountComponent();
  }

  ngOnInit() {
  }

}
