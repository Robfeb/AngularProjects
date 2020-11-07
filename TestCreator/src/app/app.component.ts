import { Component, OnInit } from '@angular/core';

export interface Test {
  question: String;
  solution: string;
}

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
      { question: 'a', solution: '1' },
      { question: 'q', solution: '2' },
      { question: 'q', solution: '3' },
      { question: 'w', solution: '4' },
      { question: 'e', solution: '5' },
      { question: 'r', solution: '6' },
      { question: 't', solution: '7' },
    ];
    this.exercise.forEach(element => {
      this.questionList.push(element.question);
      this.solutionList.push(element.solution);
    });

    this.shuffleExercise(this.questionList);
    this.shuffleExercise(this.solutionList);
    this.loadDropdowns();
  }

  loadDropdowns() {

  }

  shuffleExercise(arr: String[]) {

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
  }

}
