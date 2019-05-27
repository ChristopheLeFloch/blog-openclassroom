import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewPostComponent implements OnInit {

    postForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private postService: PostsService,
              private router: Router) { }

  ngOnInit() {
      this.initForm();
  }

  initForm() {
      this.postForm = this.formBuilder.group({
          title: ['', Validators.required],
          content: ['', Validators.required]
      });
  }

  onSavePost() {
      const title = this.postForm.get('title').value;
      const content = this.postForm.get('content').value;

      const newPost = new Post();
      newPost.title = title.substr(0, 1).toUpperCase() + title.substr(1);
      newPost.content = content;
      newPost.loveIts = 0;
      newPost.noLoveIts = 0;

      this.postService.createNewPost(newPost);
      this.router.navigate(['/posts']);
  }


}
