import { Component, Input, OnInit, Output } from '@angular/core';
import { Test } from '../shared/models/test';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.css']
})
export class CardQuestionComponent implements OnInit {

  constructor() { }
  @Input() Test: Test;
  @Output() validResponse: boolean;
  isFlipped: boolean;
  iconResponse: string = null;
  ngOnInit(): void {
  }
  ValidAnswer(answer: boolean) {
    this.validResponse = answer;
    this.iconResponse = this.validResponse ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
  }
}
