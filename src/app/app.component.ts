import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,RouterOutlet, TopBarComponent,RouterModule]
})
export class AppComponent {
  title = 'course-project';
}
