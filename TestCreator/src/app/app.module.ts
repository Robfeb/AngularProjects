import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionComponent } from './question/question.component';
import { SelectQuestionComponent } from './select-question/select-question.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleSelectQuestionComponent } from './single-select-question/single-select-question.component';
import { RadioQuestionComponent } from './radio-question/radio-question.component';
import { CardQuestionComponent } from './card-question/card-question.component';
import { SpellQuestionComponent } from './spell-question/spell-question.component';
import { WordOrderQuestionComponent } from './word-order-question/word-order-question.component';
import { CharOrderQuestionComponent } from './char-order-question/char-order-question.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseService } from './shared/services/exercise.service';
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SelectQuestionComponent,
    SingleSelectQuestionComponent,
    RadioQuestionComponent,
    CardQuestionComponent,
    SpellQuestionComponent,
    WordOrderQuestionComponent,
    CharOrderQuestionComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
