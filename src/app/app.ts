import { Component } from '@angular/core';
import { HomeComponent } from './ui/pages/home/home.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<app-home></app-home>`
})
export class App {}
