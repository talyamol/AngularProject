import { Routes } from '@angular/router';

export const routes: Routes = [
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:"home",loadComponent:()=>import('./home/home.component').then(h=>h.HomeComponent)},
    {path:"course",loadChildren:()=>import('./course/course.module').then(c=>c.CourseModule)},
    {path:"user",loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)}
];
