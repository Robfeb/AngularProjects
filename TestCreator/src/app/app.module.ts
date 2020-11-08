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
import { SingleSelectQuestionComponent } from './single-select-question/single-select-question.component';
import { RadioQuestionComponent } from './radio-question/radio-question.component';
import { CardQuestionComponent } from './card-question/card-question.component';
import { SpellQuestionComponent } from './spell-question/spell-question.component';
import { WordOrderQuestionComponent } from './word-order-question/word-order-question.component';
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
