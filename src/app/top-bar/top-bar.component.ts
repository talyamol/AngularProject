import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem  } from 'primeng/api';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule,MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})

  export class TopBarComponent implements OnInit {
    items: MenuItem[] | undefined;
    activeItem: MenuItem | undefined;
  
    ngOnInit() {
      this.items = [
        { label: 'כניסה', route: '/user/login', icon: 'home' },
        { label: 'יציאה', route: '/user/logout', icon: 'exit_to_app' },
        { label: 'הרשמה', route: '/user/register', icon: 'person_add' },
        { label: 'הקורסים שלנו', route: '/course/all-courses', icon: 'library_books' },
        { label: 'הוספת קורס', route: '/course/add-course', icon: 'add_circle' }
      ];
  
      this.activeItem = this.items[0];
    }
  }