import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogpostsService {

  constructor() { }
  addPost(postData) {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  getAllPosts() {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    return posts;
  };

  getPostByIndex(index) {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    let post = posts[index];
    return post;
  };

  updatePostByIndex(updatedData, index) {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.splice(index, 1, updatedData);
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  deletePostByIndex(index) {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
}
