import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  loveIt() {
     this.post.loveIts++;
     this.postsService.savePosts();

  }

  noLoveIt() {
     this.post.noLoveIts++;
     this.postsService.savePosts();
  }

  onDeletePost(post: Post) {
      this.postsService.removePost(post);

  }

}
