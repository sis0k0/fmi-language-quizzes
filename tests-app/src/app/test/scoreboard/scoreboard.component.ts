import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/test/score.service';
import { ActivatedRoute } from '@angular/router';
import { Score } from 'src/app/test/score.model';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scores: Score[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.scores = this.route.snapshot.data.scores;
    console.log(this.scores)
  }
}
