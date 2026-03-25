import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, Post} from '../services/posts';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.html',
})
export class PostDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  post = signal<Post | undefined>(undefined);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe({
      next: (post) => {
        this.post.set(post);   // ✅ теперь это Post, а не Observable
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load post');
        this.loading.set(false);
      }
    });
  }
}
