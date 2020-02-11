import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsListComponent } from './tests-list/tests-list.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: TestsListComponent },
];

@NgModule({
  declarations: [TestsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TestModule { }
