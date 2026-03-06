import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { AlbumsComponent } from './pages/albums/albums';
import { AlbumDetailComponent } from './pages/album-detail/album-detail';
import { AlbumPhotosComponent} from './pages/album-photos/album-photos';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: '**', redirectTo: 'home' }
];
