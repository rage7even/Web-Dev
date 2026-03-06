import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.html',
  imports: [
    FormsModule,
    CommonModule,
  ],
  styleUrl: './album-detail.scss'
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  loading = true;
  saving = false;
  error = '';

  titleDraft = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.titleDraft = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Album not found or failed to load.';
        this.loading = false;
      }
    });
  }

  save() {
    if (!this.album) return;

    const newTitle = this.titleDraft.trim();
    if (!newTitle) {
      alert('Title cannot be empty.');
      return;
    }

    this.saving = true;

    const updated: Album = { ...this.album, title: newTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: (res) => {
        // обновляем UI локально
        this.album = { ...updated, ...res };
        this.saving = false;
      },
      error: () => {
        alert('Save failed. Try again.');
        this.saving = false;
      }
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }

  viewPhotos() {
    if (!this.album) return;
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
