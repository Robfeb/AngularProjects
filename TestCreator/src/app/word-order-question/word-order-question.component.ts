import { Component, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Test } from '../shared/models/test';
import UtilsHelper from '../shared/helpers/utils-helper';

@Component({
  selector: 'app-word-order-question',
  templateUrl: './word-order-question.component.html',
  styleUrls: ['./word-order-question.component.css']
})

export class WordOrderQuestionComponent implements OnInit {
  @Input() Test: Test;
  @Output()
  validResponse: boolean;
  iconResponse: string = null;
  words: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.words, event.previousIndex, event.currentIndex);
    this.checkOrder();
  }

  checkOrder() {
    this.validResponse = this.words.join() === this.Test.Question.split(' ').join();
    this.iconResponse = this.validResponse ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
  }
  constructor() { }

  ngOnInit(): void {
    this.words = this.Test.Question.split(' ');
    UtilsHelper.shuffleList(this.words);
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
