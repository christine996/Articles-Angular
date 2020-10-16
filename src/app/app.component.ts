import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Articles } from './models/articles.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Articles-task';
  name: string;
  articlesResult: Articles[] = [];
  dataSource;

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.http.get('http://localhost:53363/api/getAllArticles').subscribe((data: Articles[]) => {
      this.articlesResult = data;
      this.dataSource = new MatTableDataSource(data);
      console.warn(data);
    });
  }
  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  add() {
    this.router.navigate(['addArticles']);
  }
  editArticle(article: Articles) {
    this.router.navigate(['editArticles',
      {
        Id: article.Id,
        articleName: article.articleName,
        articleCategory: article.articleCategory,
        articleContent: article.articleContent
      }]);
  }
}

