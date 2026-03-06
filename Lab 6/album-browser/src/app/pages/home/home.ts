import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],  // ✅ важно
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
