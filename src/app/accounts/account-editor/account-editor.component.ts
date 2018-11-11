import { Component, OnInit } from '@angular/core';
import { Department, Phone, AccountsRepository, Account } from '../../domain';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {

  account: Account;
  departments: Department[];

  constructor(
    private accountsRepository: AccountsRepository,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.departments = [
      { id: 1, name: 'Human Resources' },
      { id: 2, name: 'Accounting' },
      { id: 3, name: 'IT' },
      { id: 4, name: 'Marketing' },
    ];

    this.activatedRoute.params.subscribe((params: { accountId: string }) => {
      if (params.accountId) {
        this.accountsRepository.getById(+params.accountId).subscribe((account) => {
          this.account = account;
        });
      } else {
        this.account = {
          phoneNumbers: []
        };
      }
    });

  }

  save() {
    const onSave = () => this.router.navigateByUrl('accounts');
    if (this.account.id) {
      this.accountsRepository.update(this.account.id, this.account).subscribe(onSave);

    } else {
      this.accountsRepository.add(this.account).subscribe(onSave);
    }
  }
}
