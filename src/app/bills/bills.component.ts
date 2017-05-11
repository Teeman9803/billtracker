import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  bills : any[] = [
    {
      id : 1,
      amount : '50',
      name : 'Mariner Finance',
      dueDate : '12-5-17',
      status : 'Paid'
    },
    {
      id : 2,
      amount : '50',
      name : 'Mortgage',
      dueDate : '12-5-17',
      status : 'Paid'
    },
    {
      id : 3,
      amount : '50',
      name : 'Verizon',
      dueDate : '12-5-17',
      status : 'Paid'
    },
    {
      id : 4,
      amount : '50',
      name : 'Sprint',
      dueDate : '12-5-17',
      status : 'Paid'
    },
    {
      id : 5,
      amount : '50',
      name : 'Guardian',
      dueDate : '12-5-17',
      status : 'Paid'
    }
  ]

  constructor() { }

  ngOnInit() {

  }

}
