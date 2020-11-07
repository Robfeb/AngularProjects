import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }
  @Input() TestId: number;
  @Input() QuestionList: String[] = [];
  @Input() SolutionList: String[] = [];
  ngOnInit(): void {
  }

}
