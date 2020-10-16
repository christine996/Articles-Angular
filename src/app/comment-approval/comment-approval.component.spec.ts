import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentApprovalComponent } from './comment-approval.component';

describe('CommentApprovalComponent', () => {
  let component: CommentApprovalComponent;
  let fixture: ComponentFixture<CommentApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
