import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountsRepository } from './domain/accounts-repository.service';
import { AccountsModule } from './accounts/accounts.module';


@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccountsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    AccountsRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
