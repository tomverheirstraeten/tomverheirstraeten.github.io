import { Component, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  @Output() postCreated = new EventEmitter<{ author: string, topic: string, content: string }>();


  onSavePosts(authorVal: HTMLInputElement, topicVal: HTMLInputElement, contentVal: HTMLInputElement) {
    this.postCreated.emit({
      author: authorVal.value,
      topic: topicVal.value,
      content: contentVal.value

    });

  }
  ngOnInit(): void {
  }



}
