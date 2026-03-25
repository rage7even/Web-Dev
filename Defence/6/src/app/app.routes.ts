import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Posts } from './pages/posts/posts'
import { PostDetail} from './post-detail/post-detail';

export const routes: Routes = [
  { path: '',redirectTo: 'home' ,pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'posts', component: Posts },
  { path: 'posts/:id', component: PostDetail },
];
