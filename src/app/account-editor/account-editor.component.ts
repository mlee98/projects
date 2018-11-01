import { Component, OnInit } from '@angular/core';
import {Account} from './../domain/models/account';
import {Department} from './../domain/models/department';
import { Phone } from '../domain/models/phone';
import { AccountsRepository } from '../domain/accounts-repository.service';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {

  account: Account;
  departments: Department[];
  newPhone: Phone = {};

  constructor(private accountsRepository: AccountsRepository) { }

  ngOnInit() {
    this.accountsRepository.getById(1).subscribe((account) => {
      this.account = account;
    });

    this.departments = [
      {id: 1, name: 'Human Resources' },
      {id: 2, name: 'Accounting' },
      {id: 3, name: 'IT' },
      {id: 4, name: 'Marketing' },
    ];
  }

  addPhone() {
    this.account.phoneNumbers.push(this.newPhone);
    this.newPhone = {};
  }

}
