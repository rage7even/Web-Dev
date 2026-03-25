import {Component, OnInit, Inject, inject} from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router'

import { PostService} from '../../services/post.service';
import { Post} from '../../models/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  private postService= inject(PostService);
  private router = inject(Router);

  posts: Post[] = [];
  isLoading = true;

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 20);
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  openPost(id: number): void {
    this.router.navigate(['/posts', + id]);
  }

  // @ts-ignore
  truncateTitle(title: string): string {
    if (title. length > 40) {
      return title.slice(0, 40) + '...';
    }
    return title;
  }
}
