import {Component, inject, signal} from '@angular/core';
import {PostService, Post} from '../services/posts';
@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  private postService = inject(PostService);

  posts = signal<Post[]>([])
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.loading.set(false);
      },
        error: error => {
        this.error.set("Failed to load posts.");
        this.loading.set(false);
        console.log(error);
      }
    })
  }
}
