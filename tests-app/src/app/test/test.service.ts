import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Test } from 'src/app/test/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private testsURL = 'http://localhost:5000/tests';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Test[]> {
    const endpoint = `${this.testsURL}/select/name`;

    return this.httpClient.get<Test[]>(endpoint);
  }

  getTest(id: string): Observable<Test> {
    const endpoint = `${this.testsURL}/${id}`;

    return this.httpClient.get<Test>(endpoint);
  }
}
