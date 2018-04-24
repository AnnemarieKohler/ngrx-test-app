import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '../core/core.module';
import * as fromQuestions from './reducers/questions.reducer';
import { QuestionsEffects } from './effects/questions.effects';
import { QuestionDetailComponent } from './components/question-detail.component';
import { QuestionsService } from '../questions/services/questions.service';
import { QuestionsComponent } from './containers/questions.component';
import { SelectLevelComponent } from './components/select-level.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forChild([
      { path: '', component: QuestionsComponent },
    ]),
    StoreModule.forFeature('test', fromQuestions.reducers),
    EffectsModule.forFeature([QuestionsEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuestionsService],
  declarations: [QuestionsComponent, QuestionDetailComponent, SelectLevelComponent],
  exports: [QuestionsComponent]
})
export class QuestionsModule { }
