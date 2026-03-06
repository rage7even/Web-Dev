import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import {CommonModule} from '@angular/common';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.scss'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumService: AlbumService, private router: Router, private cdr: ChangeDetectorRef) { }



  ngOnInit(): void {
    console.log('AlbumsComponent init');

    console.log('ALBUMS COMPONENT FROM: albums.ts ✅');

    console.log('loading before:', this.loading);
    setTimeout(() => console.log('loading after 1s:', this.loading), 1000);

    this.albumService.getAlbums()
      .pipe(finalize(() => {
        this.loading = false;
        console.log('finalize -> loading:', this.loading);
        this.cdr.detectChanges();
      }))
      .subscribe({
        next: (data) => {
          console.log('albums received:', data.length);
          this.albums = data;
          console.log('albums assigned:', this.albums.length);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('getAlbums error:', err);
          this.error = 'Failed to load albums (check console + Network).';
        }
      });
  }

  openAlbum(id: number) {
    this.router.navigate(['/albums', id]);
  }

  trackByAlbumId(index: number, album: Album): number {
    return album.id;
  }

  deleteAlbum(id: number, event: Event) {
    event.stopPropagation(); // Prevent opening album detail
    if (confirm('Delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Delete error:', err);
          alert('Failed to delete album');
        }
      });
    }
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
