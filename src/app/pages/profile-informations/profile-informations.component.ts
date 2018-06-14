import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../../components/account/account.component';

@Component({
  selector: 'app-profile-informations',
  templateUrl: './profile-informations.component.html',
  styleUrls: ['./profile-informations.component.css']
})
export class ProfileInformationsComponent implements OnInit {

  account : AccountComponent;

  constructor() {
    this.account = new AccountComponent();
   }

  ngOnInit() {
  }

}
