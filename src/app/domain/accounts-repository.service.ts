import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Account } from './models/account';

@Injectable()
export class AccountsRepository {

  protected endPoint = 'https://api.johnlawrimore.com/directory/accounts';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'johnlawrimore'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  getById(id: number): Observable<Account> {
    return this.httpClient
      .get<Account>(`${this.endPoint}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  add(account: Account): Observable<Account> {
    return this.httpClient
      .post<Account>(this.endPoint, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  update(id: number, account: Account): Observable<Account> {
    return this.httpClient
      .put<Account>(`${this.endPoint}/${id}`, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }
}
