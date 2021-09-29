import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  @Input() public comments: string[] = [];
}
