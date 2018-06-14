import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../../components/account/account.component';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  account : AccountComponent;


  constructor() {
    this.account = new AccountComponent();
   }

  ngOnInit() {
  }

}
