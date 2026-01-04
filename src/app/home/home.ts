import { Component } from '@angular/core';
import { Dasboard } from '../components/dasboard/dasboard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Dasboard],  
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
