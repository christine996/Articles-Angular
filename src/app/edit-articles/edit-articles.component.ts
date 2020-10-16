import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-edit-articles',
  templateUrl: './edit-articles.component.html',
  styleUrls: ['./edit-articles.component.css']
})
export class EditArticlesComponent implements OnInit {
  articleName: string;
  articleCategory: string;
  articleContent: string;
  Id: any;
  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('Id');
    this.articleName = this.route.snapshot.paramMap.get('articleName');
    this.articleCategory = this.route.snapshot.paramMap.get('articleCategory');
    this.articleContent = this.route.snapshot.paramMap.get('articleContent');

  }
  edit() {
    const url = 'http://localhost:53363/api/editArticle';

    this.http.post(url, {
      Id:this.Id,
      ArticleName: this.articleName,
      ArticleCategory: this.articleCategory,
      ArticleContent: this.articleContent

    }).toPromise().then((data: any) => {
      console.log(data);
    });


  }

}
