import { Component, OnInit, inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterModule} from '@angular/router';

import {PostService} from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private postService = inject(PostService);

  post: Post | null = null;
  isLoading = true;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPost(id).subscribe({
      next: (data) => {
        this.post = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching post details:', err);
        this.isLoading = false;
      }
    });
  }
  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
