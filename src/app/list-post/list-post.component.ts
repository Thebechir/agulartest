import { Component, OnInit } from '@angular/core';
import { BlogpostsService } from '../services/blogposts.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts: any;

  constructor(private blogpostsService: BlogpostsService) { }

  ngOnInit(): void {
    this.posts = this.blogpostsService.getAllPosts();
  }
  deletepost(i) {
    this.blogpostsService.deletePostByIndex(i);
    this.posts = this.blogpostsService.getAllPosts();
  }

}
