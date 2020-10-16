import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Articles } from './../models/articles.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.component.html',
  styleUrls: ['./view-articles.component.css']
})
export class ViewArticlesComponent implements OnInit {
  title = 'Articles-task';
  name: string;
  articlesResult: Articles[] = [];
  dataSource;
  constructor(private http: HttpClient,
    private router: Router) { }

        // get all articles to list them in cards for user
  ngOnInit() {
    this.http.get('http://localhost:53363/api/getAllArticles').subscribe((data: Articles[]) => {
      this.articlesResult = data;
      this.dataSource = new MatTableDataSource(data);
      console.warn(data);
    });
  }
    // applying filter so user can search by any word about any article he wants
  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    // routing to addArticles component
  add() {
    this.router.navigate(['addArticles']);
  }
 // routing to  editArticles with all params to be shown
 editArticle(article: Articles) {
    this.router.navigate(['editArticles',
      {
        Id: article.Id,
        articleName: article.articleName,
        articleCategory: article.articleCategory,
        articleContent: article.articleContent
      }]);
  }
   // routing to addComment component si user can add any comment
  addComment(article: Articles) {
    this.router.navigate(['addComment', { Id: article.Id }]);
  }

    // routing to commentApproval component so Admin can approve or disapprove this comment with params:Id and comment
  commentApproval(article: Articles) {
    this.router.navigate(['commentApproval', { Id: article.Id, comment: article.articleComment }]);
  }

}
