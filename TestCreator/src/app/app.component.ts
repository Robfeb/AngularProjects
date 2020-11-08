import { Component, OnInit } from '@angular/core';
import UtilsHelper from './shared/helpers/utils-helper';
import { QuestionType } from './shared/models/questionType';
import { Test } from './shared/models/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.loadExercise();
  }
  title = 'Test Creator';
  exercise: Test[];
  questionList: String[] = [];
  solutionList: String[] = [];
  public questionType = QuestionType;
  loadExercise() {
    this.exercise = [
      { Id: 0, Title: 'TRADUCE:', Question: 'NUNCA', Solution: 'NEVER', Type: QuestionType.Card },
      { Id: 1, Title: 'TRADUCE:', Question: 'SIEMPRE', Solution: 'ALWAYS', Type: QuestionType.Spell },
      { Id: 2, Title: 'TRADUCE:', Question: 'A VECES', Solution: 'SOMETIMES', Type: QuestionType.Question },
      { Id: 3, Title: 'TRADUCE:', Question: 'DE VEZ EN CUANDO', Solution: 'USUALLY', Type: QuestionType.Select },
      { Id: 4, Title: 'TRADUCE:', Question: 'SOLEADO', Solution: 'SUNNY', Type: QuestionType.Spell },
      { Id: 5, Title: 'TRADUCE:', Question: 'LLUVIOSO', Solution: 'RAINY', Type: QuestionType.Radio },
      { Id: 6, Title: 'TRADUCE:', Question: 'NUBLADO', Solution: 'CLOUDY', Type: QuestionType.Question },
      { Id: 7, Title: 'ORDENA:', Question: 'What Time is it?', Solution: 'What Time is it?', Type: QuestionType.Order },
      { Id: 7, Title: 'QUIZÁS:', Question: 'MAYBE', Solution: 'MAYBE', Type: QuestionType.CharOrder },
    ];
    this.exercise.forEach(element => {
      this.questionList.push(element.Question);
      this.solutionList.push(element.Solution);
    });

    UtilsHelper.shuffleList(this.questionList);
    UtilsHelper.shuffleList(this.solutionList);
  }

  shuffleExercise() {
    UtilsHelper.shuffleList(this.questionList);
    UtilsHelper.shuffleList(this.solutionList);
  }
}
