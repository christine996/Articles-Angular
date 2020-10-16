import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { EditArticlesComponent } from './edit-articles/edit-articles.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import {CommentApprovalComponent } from './comment-approval/comment-approval.component';
const routes: Routes = [
  { path: '', redirectTo: '/viewArticles', pathMatch: 'full' },
  { path: 'addArticles', component: AddArticlesComponent },
  { path: 'editArticles', component: EditArticlesComponent },
  { path: 'viewArticles', component: ViewArticlesComponent },
  { path: 'addComment', component: AddCommentComponent },
  { path: 'commentApproval', component: CommentApprovalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
