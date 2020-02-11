import { Injectable } from '@angular/core';
import { Score } from 'src/app/test/score.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  saveScore(score: Score) {
    const scores = this.loadAll();
    const testScores = scores[score.testId] || [];
    testScores.push(score);

    scores[score.testId] = [...testScores];
    localStorage.setItem('scores', JSON.stringify(scores));
  }

  loadTestScores(testId: string): Observable<Score[]> {
    const scores = JSON.parse(localStorage.getItem('scores')) || {};
    const testScores: Score[] = scores[testId] || [];
    const sortedScores = this.sortScores(testScores);

    return of(sortedScores);
  }

  loadAll(): any {
    const scores = JSON.parse(localStorage.getItem('scores')) || {};

    return scores;
  }

  private sortScores(scores: Score[]) {
    return scores.sort((a, b) => b.points - a.points);
  }
}
