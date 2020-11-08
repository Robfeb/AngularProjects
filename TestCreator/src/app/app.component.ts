import { Component, OnInit } from '@angular/core';
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
    ];
    this.exercise.forEach(element => {
      this.questionList.push(element.Question);
      this.solutionList.push(element.Solution);
    });

    this.shuffleExerciseList(this.questionList);
    this.shuffleExerciseList(this.solutionList);
  }

  shuffleExercise() {
    this.shuffleExerciseList(this.questionList);
    this.shuffleExerciseList(this.solutionList);
  }

  shuffleExerciseList(arr: String[]) {

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
  }

}
