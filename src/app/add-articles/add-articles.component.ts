import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {
  articleName: string;
  articleCategory: string;
  articleContent: string;
  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {

  }
    //passing params given from user to api to add a new article
  post() {
    const url = 'http://localhost:53363/api/addArticle';

    this.http.post(url, {
      ArticleName: this.articleName,
      ArticleCategory:this.articleCategory,
      ArticleContent: this.articleContent

    }).toPromise().then((data: any) => {
      console.log(data);
    });


  }
}
