import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-log-out',
  standalone: false,
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent {
  constructor(private router: Router) {}
  ngOnInit(){
    this.logout()
  }
  logout() {
    Swal.fire({
      title: '?האם אתה בטוח שברצונך להתנתק',
      showCancelButton: true,
      confirmButtonText: 'כן, התנתק',
      cancelButtonText: 'ביטול',
      
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        this.router.navigate(['/']); // ניתוב לדף הבית
      }
      this.router.navigate(['/']); // ניתוב לדף הבית

    });
  }
}


