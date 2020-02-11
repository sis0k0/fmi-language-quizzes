import { Injectable } from '@angular/core';
import { Score } from 'src/app/test/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  saveScore(score: Score) {
    const scores = this.loadAll();
    const testScores = scores[score.testId] || [];
    testScores.push(score);

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  loadTestScores(testId: string): Score[] {
    const scores = this.loadAll();
    const testScores = scores[testId] || [];

    return testScores;
  }

  loadAll(): Score[] {
    const scores = JSON.parse(localStorage.getItem('scores') || '');

    return scores;
  }
}
