import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test/test.service';
import { Test } from 'src/app/test/test.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent implements OnInit {
  tests: Observable<Test[]>;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.tests = this.testService.getAll();
  }

}
