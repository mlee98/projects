import { Routes } from '@angular/router';
import { AccountEditorComponent } from './account-editor/account-editor.component';


export const ACCOUNTS_ROUTES: Routes = [
  { path: 'accounts/new', component: AccountEditorComponent },
  { path: 'accounts/:accountId', component: AccountEditorComponent }
];
