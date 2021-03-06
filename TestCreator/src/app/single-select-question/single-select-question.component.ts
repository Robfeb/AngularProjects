import { Component, Input, OnInit, Output } from '@angular/core';
import { Test } from '../shared/models/test';

@Component({
  selector: 'app-single-select-question',
  templateUrl: './single-select-question.component.html',
  styleUrls: ['./single-select-question.component.css']
})
export class SingleSelectQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() Test: Test;
  @Input() SolutionList: String[] = [];
  solutionSelected: string = null;
  iconResponse: string = null;
  @Output()
  validResponse: boolean;
  changeSolution(value: string) {
    this.solutionSelected = value;
    this.isCorrect();
  }
  isCorrect() {
    if (this.solutionSelected != null ) {
      this.validResponse = (this.Test.Solution === this.solutionSelected);
      this.iconResponse = this.validResponse ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
    }

  }

}
