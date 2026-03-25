import { Routes } from '@angular/router';
import {Home} from './home/home';
import {About} from './about/about';
import {Posts} from './posts/posts';
import {PostDetailComponent} from './post-detail/post-detail';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path:'posts', component: Posts},
  {path: 'post/:id', component: PostDetailComponent},
];
