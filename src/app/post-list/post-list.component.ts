import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    @Input() postList: PostListComponent;

    posts: Post[];
    postsSubscription: Subscription;

  constructor(private postService: PostsService,
              private router: Router) {}

  ngOnInit() {
     this.postsSubscription = this.postService.postSubject.subscribe (
          (posts: Post[]) => {
              this.posts = posts;
          }
      );
     this.postService.emitPosts();
    }

    ngOnDestroy(): void {
        this.postsSubscription.unsubscribe();
    }



}
