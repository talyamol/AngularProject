import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const enterCourseGuard: CanActivateFn = (route, state) => {

  const user = localStorage.getItem("user");
  if (user) 
    return true;
  // } else {
  //   Swal.fire({
  //     title: 'לא רשום',
  //     text: 'אנא הרשם כדי לגשת לקורס',
  //     icon: 'warning',
  //     confirmButtonText: 'הבנתי',
  //   }).then(() => {
  //     // הובלת המשתמש לדף ההרשמה באמצעות ה-Router
  //     router.navigate(['/registration']);
  //     return false; // מונע המשך ניווט רגיל
  //   });
    return false; // יידון לנהלי הגישה באופן אוטומטי
  
};
