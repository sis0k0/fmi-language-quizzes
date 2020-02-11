import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TestComponent } from 'src/app/test/test/test.component';
import { TestsListComponent } from 'src/app/test/tests-list/tests-list.component';
import { TestResolver } from 'src/app/test/test-resolver.service';

const routes = [
  { path: '', component: TestsListComponent },
  {
    path: ':id',
    component: TestComponent,
    resolve: {
      test: TestResolver
    }
  },
];

@NgModule({
  declarations: [
    TestComponent,
    TestsListComponent
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
