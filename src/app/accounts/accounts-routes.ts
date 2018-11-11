import { Routes } from '@angular/router';
import { AccountEditorComponent } from './account-editor/account-editor.component';
import { AccountListComponent } from './account-list/account-list.component';


export const ACCOUNTS_ROUTES: Routes = [
  { path: 'accounts', component: AccountListComponent},
  { path: 'accounts/new', component: AccountEditorComponent },
  { path: 'accounts/:accountId', component: AccountEditorComponent }
];
