import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
