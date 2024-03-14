import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Users } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServerService } from '../user-server.service';
import Swal from 'sweetalert2';

export const emailValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return control.value && !control.value.match(emailRegEx)
    ? { 'emailPattern': true }
    : null;
};

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public addForm: FormGroup;
  public enteredUsername: string;
  public allUsers: Users[]
  hide = true

  constructor(private router: Router, private route: ActivatedRoute, private _userServise: UserServerService, private f: FormBuilder) { }



  ngOnInit(): void {

    this.addForm = new FormGroup({
      'password': new FormControl("", Validators.required),
      'name': new FormControl("", [Validators.required, Validators.minLength(5)]),
      'email': new FormControl("", [Validators.required, Validators.minLength(10), emailValidator]),
      'address': new FormControl("", [Validators.maxLength(20)])
    });
    this.route.queryParams.subscribe(params => {
      this.enteredUsername = params['username'];
      this.addForm.patchValue({
        'name': this.enteredUsername
      });
    }
      // this.addForm.updateValueAndValidity();

    )
  }
  public users() {
    this.route.params.subscribe((param) => {
      this._userServise.getAllUser().subscribe({
        next: (res) => {
          this.allUsers = res;
          console.log(this.allUsers);
        },
        error: (err) => {
          console.log(err)
        }
      });

    })
  }

  public save() {
    this.users();
    const userName = this.addForm.get('name').value;
    const password = this.addForm.get('password').value;
    console.log(this.allUsers)
    if (this.allUsers) {
      const u = this.allUsers.find(u1 => u1.name === userName && u1.password === password)
      if (u)
        alert("אתה משתמש קיים");
    }
    else {
      let u1: Users = this.addForm.value;
      this.route.params.subscribe((param) => {
        this._userServise.addUser(u1).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (err) => {
            console.log(err)
          }
        });

      })

      Swal.fire({
        title: 'התחברות מוצלחת',
        text: 'ברוך הבא!',
        icon: 'success',
        confirmButtonText: 'המשך'
      }).then(() => {
        this.router.navigate(['/course/all-courses']);
      });
    }


  }

}

