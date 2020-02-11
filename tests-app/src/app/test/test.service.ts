import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Test } from 'src/app/test/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  // tslint:disable-next-line:max-line-length
  private testsURL = 'https://gist.githubusercontent.com/sis0k0/b9c62d1068a20696e8fb2cbb537c43e7/raw/3012de31365c5aaf2313928e49d23e3180d05a08/tests.json';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(this.testsURL);
  }
}
