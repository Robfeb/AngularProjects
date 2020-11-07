import { Component, OnInit } from '@angular/core';
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

  loadExercise() {
    this.exercise = [
      { Id: 0, Title: 'TRADUCE:', Question: 'NEVER', Solution: 'NUNCA' },
      { Id: 1, Title: 'TRADUCE:', Question: 'ALWAYS', Solution: 'SIEMPRE' },
      { Id: 2, Title: 'TRADUCE:', Question: 'SOMETIMES', Solution: 'A VECES' },
      { Id: 3, Title: 'TRADUCE:', Question: 'USUALLY', Solution: 'DE VEZ EN CUANDO' },
      { Id: 4, Title: 'TRADUCE:', Question: 'SUNNY', Solution: 'SOLEADO' },
      { Id: 5, Title: 'TRADUCE:', Question: 'RAINY', Solution: 'LLUVIOSO' },
      { Id: 6, Title: 'TRADUCE:', Question: 'CLOUDY', Solution: 'NUBLADO' },
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
