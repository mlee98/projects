import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountEditorComponent } from './account-editor/account-editor.component';
import { AccountsRepository } from './domain/accounts-repository.service';

@NgModule({
   declarations: [
      AppComponent,
      AccountEditorComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
     AccountsRepository
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
