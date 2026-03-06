import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.scss'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  imports!: [CommonModule];
  loading = true;
  error = '';
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load photos.';
        this.loading = false;
      }
    });
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
