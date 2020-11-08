import { Component, Input, OnInit, Output } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';
import { Test } from '../shared/models/test';

@Component({
  selector: 'app-spell-question',
  templateUrl: './spell-question.component.html',
  styleUrls: ['./spell-question.component.css']
})
export class SpellQuestionComponent implements OnInit {
  @Input() Test: Test;
  @Output()
  validResponse: boolean;
  solutionChosed: String;
  chars: string[];
  solutionChars: string[];
  iconResponse: string = null;

  constructor() { }

  ngOnInit(): void {
    this.chars = this.Test.Solution.split('');
    this.solutionChars = [];
    this.chars.forEach(el => {
      if (el === ' ')
        this.solutionChars.push(el)
      else
        this.solutionChars.push('*')
    });
  }
  CheckWordValidation() {
    this.validResponse = true;
    let allCharsTyped = true;
    for (let index = 0; index < this.chars.length; index++) {
      if (this.solutionChars[index] === '*') {
        allCharsTyped = false;
        break;
      }
      if (!this.CheckChar(index)) {
        this.validResponse = false;
        break;
      }
    }

    if (allCharsTyped)
      this.iconResponse = this.validResponse ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
  }
  CheckSpace(i: number): boolean {
    return this.chars[i] === ' ';
  }

  CheckChar(i: number): boolean {
    return this.solutionChars[i] === this.chars[i] || this.CheckSpace(i);
  }

  SetChar(event: any, i: number) {

    this.solutionChars[i] = event.key.toUpperCase();
    this.CheckWordValidation();
    let element = event.srcElement.nextElementSibling;
    if (element === null)
      return;
    else
      element.focus();
  }
}
