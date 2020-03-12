import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  blogposts: {
    author: string,
    topic: string,
    content: string,
  }[] = [];

  onPostCreated(postData: { author: string, topic: string, content: string }) {
    this.blogposts.push({
      author: postData.author,
      topic: postData.topic,
      content: postData.content
    })
    console.log(this.blogposts);
  }





}
