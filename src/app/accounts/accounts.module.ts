import { NgModule } from '@angular/core';
import { AccountEditorComponent } from './account-editor/account-editor.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { RouterModule } from '@angular/router';
import { ACCOUNTS_ROUTES } from './accounts-routes';
import { AccountListComponent } from './account-list/account-list.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(ACCOUNTS_ROUTES),
    SharedModule
  ],
  declarations: [
    AccountEditorComponent,
    PhoneListComponent,
    AccountListComponent
  ],
  exports: [
    AccountEditorComponent
  ]
})
export class AccountsModule {

}
