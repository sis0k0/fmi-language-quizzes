import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/test/test.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/test/question.model';
import { Score } from 'src/app/test/score.model';
import { ScoreService } from 'src/app/test/score.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test: Test;
  totalPoints: number;
  currentQuestion: Question;
  questionStartTime: number;
  secondsLeft: number;
  timerInterval: ReturnType<typeof setInterval>;
  answerTimeout: ReturnType<typeof setTimeout>;
  finished: boolean;

  constructor(
    private route: ActivatedRoute,
    private scoreService: ScoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadTest();
    this.startTest();
  }

  onAnswerInput(event) {
    const answer = event.target.value;

    if (this.isCorrectAnswer(answer)) {
      event.target.value = '';
      const points = this.calculatePoints(this.questionStartTime, this.test.secondsForAnswer);
      this.totalPoints += points;

      this.showNextQuestion();
    }
  }

  saveScore(name: string) {
    const testId = this.test._id;
    const score = new Score(testId, name, this.totalPoints);

    this.scoreService.saveScore(score);

    this.router.navigate(['test', 'scoreboard', testId], {
      queryParams: {
        name,
        points: score.points
      }
    });
  }

  private loadTest() {
    this.totalPoints = 0;
    this.test = this.route.snapshot.data.test;
  }

  private startTest() {
    this.showNextQuestion();
  }

  private showNextQuestion() {
    this.questionStartTime = Date.now();
    this.resetTimers();

    if (!this.test.questions.length) {
      this.finished = true;

      return;
    }

    this.currentQuestion = this.test.questions.shift();
    const secondsForAnswer = Number(this.test.secondsForAnswer);

    this.startTimer(secondsForAnswer);
    this.startQuestionTimeout(secondsForAnswer);
  }

  private isCorrectAnswer(answer: string) {
    const correctAnswer = this.currentQuestion.answer;

    return answer === correctAnswer;
  }

  private calculatePoints(startTime: number, secondsForAnswer: string) {
    const msForAnswer = Number(secondsForAnswer) * 1000;
    const endTime = Date.now();
    const msEllapsed = endTime - startTime;

    return msForAnswer - msEllapsed;
  }

  private resetTimers() {
    clearInterval(this.timerInterval);
    clearTimeout(this.answerTimeout);
  }

  private startQuestionTimeout(secondsForAnswer: number) {
    this.answerTimeout = setTimeout(() => {
      this.showNextQuestion();
    }, secondsForAnswer * 1000);
  }

  private startTimer(secondsForAnswer: number) {
    this.secondsLeft = secondsForAnswer;

    this.timerInterval = setInterval(() => {
      this.secondsLeft -= 1;
    }, 1000);
  }
}
