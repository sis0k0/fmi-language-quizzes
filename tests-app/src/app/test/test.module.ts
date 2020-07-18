import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TestComponent } from 'src/app/test/test/test.component';
import { TestsListComponent } from 'src/app/test/tests-list/tests-list.component';
import { TestResolver } from 'src/app/test/test-resolver.service';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ScoreResolver } from 'src/app/test/score-resolver.service';
import { AddTestComponent } from './add-test/add-test.component';

const routes = [
  { path: '', component: TestsListComponent },
  {
    path: ':id',
    component: TestComponent,
    resolve: {
      test: TestResolver
    }
  },
  {
    path: 'scoreboard/:id',
    component: ScoreboardComponent,
    resolve: {
      scores: ScoreResolver
    }
  },
];

@NgModule({
  declarations: [
    TestComponent,
    TestsListComponent,
    ScoreboardComponent,
    AddTestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class TestModule { }
