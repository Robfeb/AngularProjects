import { Component, Input, OnInit, Output } from '@angular/core';
import { Test } from '../shared/models/test';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }
  @Input() Test: Test;
  solutionChosed: String;
  @Output()
  validResponse: boolean;
  iconResponse: string = null;

  ngOnInit(): void {
  }
  onSolutionChange(event:any) {
    if (event.target.value != null) {
      this.solutionChosed=event.target.value.toUpperCase();
      this.validResponse = (this.Test.Solution === this.solutionChosed);
      this.iconResponse = this.validResponse ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
    }
  }

  getIconLabel(): string | null {
    switch (this.iconResponse) {
      case 'sentiment_very_satisfied':
        return 'Correct answer';
      case 'sentiment_very_dissatisfied':
        return 'Incorrect answer';
      default:
        return null;
    }
  }
}
