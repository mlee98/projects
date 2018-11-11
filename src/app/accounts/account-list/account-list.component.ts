import { Component, OnInit } from '@angular/core';
import { Account, AccountsRepository } from '../../domain';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];

  constructor(
    private accountsRepository: AccountsRepository,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.accountsRepository.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  deleteRow(id: number, index: number) {
    if (window.confirm('Are you sure?')) {
      this.accountsRepository.deleteById(id).subscribe(() => {
        this.accounts.splice(index, 1);
      });
    }
  }

}
