import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ScoreService } from 'src/app/test/score.service';
import { Score } from 'src/app/test/score.model';

@Injectable({ providedIn: 'root' })
export class ScoreResolver implements Resolve<Score[]> {
  constructor(private scoreService: ScoreService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Score[]> {
    const id = route.paramMap.get('id');

    return this.scoreService.loadTestScores(id);
  }
}
