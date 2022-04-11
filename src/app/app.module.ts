import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }