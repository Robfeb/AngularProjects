import { Component, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Test } from '../shared/models/test';
import UtilsHelper from '../shared/helpers/utils-helper';

@Component({
  selector: 'app-char-order-question',
  templateUrl: './char-order-question.component.html',
  styleUrls: ['./char-order-question.component.css']
})
export class CharOrderQuestionComponent implements OnInit {

  @Input() Test: Test;
  @Output()
  validResponse: boolean;
  iconResponse: string = null;
  chars: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chars, event.previousIndex, event.currentIndex);
    this.checkOrder();
  }

  checkOrder() {
    this.validResponse = this.chars.join() === this.Test.Question.split('').join();
    this.iconResponse = this.validResponse ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
  }
  constructor() { }

  ngOnInit(): void {
    this.chars = this.Test.Question.split('');
    UtilsHelper.shuffleList(this.chars);
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
