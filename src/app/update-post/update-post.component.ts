import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogpostsService } from '../services/blogposts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  index;
  submitted = false;
  updatePostForm: FormGroup = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    createDate: new FormControl(new Date())
  })
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private blogpostsService: BlogpostsService) { }

  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.params['index'];
    this.loadPostData();
  }
  loadPostData() {
    let poststoupdate = this.blogpostsService.getPostByIndex(this.index)
    this.updatePostForm.patchValue(poststoupdate);
  }
  updatePost() {
    this.submitted = true;
    if (this.updatePostForm.invalid) {
      return;
    }

    this.blogpostsService.updatePostByIndex(this.updatePostForm.value, this.index)

    this.updatePostForm.reset();
    this.submitted = false;
    this.router.navigate(['list'])

  }

}
