import { Injectable } from '@angular/core';
import { Score } from 'src/app/test/score.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scoresURL = 'http://localhost:5000/scores';

  constructor(private httpClient: HttpClient) { }

  saveScore(score: Score) {
    return this.httpClient.post<Score>(this.scoresURL, score, httpOptions);
  }

  loadTestScores(testId: string): Observable<Score[]> {
    const endpoint = `${this.scoresURL}/test/${testId}`;

    return this.httpClient.get<Score[]>(endpoint)
      .pipe(map(scores => this.sortScores(scores)));
  }

  private sortScores(scores: Score[]) {
    return scores.sort((a, b) => b.points - a.points);
  }
}
