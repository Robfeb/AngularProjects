import { Component, OnInit } from '@angular/core';
import UtilsHelper from './shared/helpers/utils-helper';
import { QuestionType } from './shared/models/questionType';
import { Test } from './shared/models/test';
import { ExerciseService } from './shared/services/exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {
  }
  ngOnInit(): void {
    this.loadExercise();
  }
  title = 'Test Creator';
  exercise: Test[];
  questionList: String[] = [];
  solutionList: String[] = [];
  public questionType = QuestionType;

  loadExercise() {
    this.exercise = [];
    this.exerciseService.fetchAvailableExercises().then((respomse: Test[]) => {
      debugger;
      this.exercise = respomse;
    });
    this.exercise.forEach(element => {
      this.questionList.push(element.Question);
      this.solutionList.push(element.Solution);
    });
    this.shuffleExercise();
  }

  shuffleExercise() {
    UtilsHelper.shuffleList(this.questionList);
    UtilsHelper.shuffleList(this.solutionList);
  }
}
