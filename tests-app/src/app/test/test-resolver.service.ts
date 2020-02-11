import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from 'src/app/test/test.model';
import { TestService } from 'src/app/test/test.service';

@Injectable({ providedIn: 'root' })
export class TestResolver implements Resolve<Test> {
  constructor(private testService: TestService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Test> {
    const id = route.paramMap.get('id');

    return this.testService.getTest(id);
  }
}
