import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { EditArticlesComponent } from './edit-articles/edit-articles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewArticlesComponent } from './view-articles/view-articles.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentApprovalComponent } from './comment-approval/comment-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    AddArticlesComponent,
    EditArticlesComponent,
    ViewArticlesComponent,
    AddCommentComponent,
    CommentApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
