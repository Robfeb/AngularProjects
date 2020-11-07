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
import {MatIconModule} from '@angular/material/icon';
import { SingleSelectQuestionComponent } from './single-select-question/single-select-question.component';
import { RadioQuestionComponent } from './radio-question/radio-question.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SelectQuestionComponent,
    SingleSelectQuestionComponent,
    RadioQuestionComponent,
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
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
