import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor() { }

  accounts : any[] = [
    {
      id : 1,
      balance : '50',
      name : 'Tee Checking',
    },
    {
      id : 2,
      balance : '50',
      name : 'Amber Checking',
    },
    {
      id : 3,
      balance : '50',
      name : 'Savings',
    },
    {
      id : 4,
      balance : '50',
      name : 'Family Savings',
    },

  ]

  ngOnInit() {
  }

}
