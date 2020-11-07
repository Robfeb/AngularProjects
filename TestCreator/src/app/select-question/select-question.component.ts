import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../shared/models/test';

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.css']
})
export class SelectQuestionComponent implements OnInit {

  constructor() { }
  @Input() Test: Test;
  @Input() QuestionList: String[] = [];
  @Input() SolutionList: String[] = [];
  solutionSelected: string = null;
  questionSelected: string = null;
  iconResponse: string = null;
  ngOnInit(): void {
  }
  changeQuestion(value: string) {
    this.questionSelected = value;
    this.isCorrect();
  }
  changeSolution(value: string) {
    this.solutionSelected = value;
    this.isCorrect();
  }
  isCorrect() {
    let iconChosed: string = "null";
    if (this.solutionSelected != null && this.questionSelected != null)
      iconChosed = (this.Test.Question === this.questionSelected && this.Test.Solution === this.solutionSelected)
        ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
    this.iconResponse = iconChosed;

  }

}
