import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from './models/account';
import { Observable } from 'rxjs';


@Injectable()
export class AccountsRepository {

  protected endPoint = 'https://api.johnlawrimore.com/directory/accounts';

  protected httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'matthewlee'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) { }

  getById(id: number): Observable<Account> {
    return this.httpClient.get(`${this.endPoint}/${id}`, this.httpOptions).pipe(catchError(this.handleException));
  }

  add(account: Account): Observable<Account> {
    return this.httpClient.post(`${this.endPoint}`, account, this.httpOptions).pipe(catchError(this.handleException));
  }

  update(id: number, account: Account): Observable<Account> {
    return this.httpClient.put(`${this.endPoint}/${id}`, account, this.httpOptions).pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
  const message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
    alert(message);
    return Observable.throw(exception);
  }

}
