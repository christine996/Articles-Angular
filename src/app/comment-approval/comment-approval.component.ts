import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Articles } from './../models/articles.interface';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-comment-approval',
  templateUrl: './comment-approval.component.html',
  styleUrls: ['./comment-approval.component.css']
})
export class CommentApprovalComponent implements OnInit {
  articleComment: any;
  Id: any;
  disapprovalReason: any;
  check = false;
  checkComment = false;
  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // getting the passed params Id and comment
    this.Id = this.route.snapshot.paramMap.get('Id');
    this.articleComment = this.route.snapshot.paramMap.get('comment');


  }
  // passing params to approve or disapprove the comment
  approveComment() {
    this.checkComment = true;
    const url = 'http://localhost:53363/api/commentApproval';

    this.http.post(url, {
      Id: this.Id,
      Comments: this.articleComment,
      // accessing column approval in DB with true to add the comment
      commentApproval: true


    }).toPromise().then((data: any) => {
      console.log(data);
    });


  }
  disapproveComment() {
    this.check = true;

  }
  submit() {
    const url = 'http://localhost:53363/api/commentApproval';

    this.http.post(url, {
      Id: this.Id,
      articleComment: null,
      // accessing column approval in DB with false to delete the comment
      commentApproval: false,
      Reason: this.disapprovalReason

    }).toPromise().then((data: any) => {
      console.log(data);
    });
  }

}
