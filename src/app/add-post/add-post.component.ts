import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogpostsService } from '../services/blogposts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  submitted = false;
  addPostForm: FormGroup = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    createDate: new FormControl(new Date())
  })



  constructor(private router: Router, private blogpostsService: BlogpostsService) { }

  ngOnInit(): void {
  }
  addPost() {
    let currentDate = new Date();
    this.submitted = true;
    if (this.addPostForm.invalid) {
      return;
    };

    this.blogpostsService.addPost(this.addPostForm.value);

    this.addPostForm.reset();
    this.submitted = false;
    this.router.navigate(['list'])



  }
}
