import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromQuestions from './reducers/questions.reducer';
import { EffectsModule } from '@ngrx/effects';
import { QuestionsEffects } from './effects/questions.effects';
import { HttpClientModule } from '@angular/common/http';
import { QuestionDetailComponent } from './components/question-detail.component';
import { QuestionsService } from '../questions/services/questions.service';
import { QuestionsComponent } from './containers/questions.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forChild([
      { path: '', component: QuestionDetailComponent},
    ]),
    StoreModule.forFeature('test', fromQuestions.reducers),
    EffectsModule.forFeature([QuestionsEffects])
  ],
  providers: [QuestionsService],
  declarations: [QuestionsComponent, QuestionDetailComponent],
  exports: [QuestionsComponent]
})
export class QuestionsModule { }
