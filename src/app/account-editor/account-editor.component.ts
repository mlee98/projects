import { Component, OnInit } from '@angular/core';
import {Account} from './../domain/models/account';
import {Department} from './../domain/models/department';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {

  account: Account;
  departments: Department[];

  constructor() { }

  ngOnInit() {
    this.account = {
      name: 'Matthew'
    };

    this.departments = [
      {id: 1, name: "Human Resources" },
      {id: 2, name: "Accounting" },
      {id: 3, name: "IT" },
      {id: 4, name: "Marketing" },
    ];
  }

}
