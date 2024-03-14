import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserServerService } from './user-server.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { LogOutComponent } from './log-out/log-out.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [LoginComponent,RegisterComponent,LogOutComponent],
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,MatSelectModule,
    MatDividerModule],
  providers:[UserServerService],
  exports:[UserRoutingModule]

})
export class UserModule { }
