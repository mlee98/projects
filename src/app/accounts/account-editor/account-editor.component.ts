import { Component, OnInit, ViewChild } from '@angular/core';
import { Department, AccountsRepository, Account } from '../../domain';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneListComponent } from '../phone-list/phone-list.component';

@Component({
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {

  account: Account;
  departments: Department[];

  @ViewChild('phoneList')
  phoneList: PhoneListComponent;

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

    if (this.phoneList.newPhone.number) {
      alert('Incomplete Phone Number');
      return;
    }

    const onSave = () => this.router.navigateByUrl('accounts');
    if (this.account.id) {
      this.accountsRepository.update(this.account.id, this.account).subscribe(onSave);

    } else {
      this.accountsRepository.add(this.account).subscribe(onSave);
    }
  }

  onEventOccured(error: string) {
    alert(error);
  }

}
