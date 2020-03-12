import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor() { }



  @Input() public parentData;

  ngOnInit(): void {

  }

}
