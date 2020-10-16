import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  check: boolean = false;
  comment: string;
  Id: any;
  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      // getting article Id to add comment to it
      this.Id = this.route.snapshot.paramMap.get('Id');
    }
    // passing comment and id to api
  addComment() {
    this.check = true;
    const url = 'http://localhost:53363/api/addComment';
    this.http.post(url, {
      Comments: this.comment,
      Id: this.Id
    }).toPromise().then((data: any) => {
      console.log(data);
    });


  }
 
}
