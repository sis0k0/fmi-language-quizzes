import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Test } from 'src/app/test/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  // tslint:disable-next-line:max-line-length
  private testsURL = 'http://localhost:5000/test';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Test[]> {
    const endpoint = `${this.testsURL}/names`;

    return this.httpClient.get<Test[]>(endpoint);
  }

  getTest(id: string): Observable<Test> {
    const endpoint = `${this.testsURL}/test/${id}`;

    return this.httpClient.get<Test>(endpoint);
  }
}
