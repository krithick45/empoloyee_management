import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../services/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  empService = inject(Employee);
  router = inject(Router);


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    const val = this.loginForm.value;
    console.log(val);

    console.log('Login data => ', val);

    if (this.loginForm.valid) {
      this.empService.onLogin(val).subscribe({
        next: (res: any) => {
          console.log('Login Successful', res.result);
          localStorage.setItem('employeeData', JSON.stringify(res.data));
          if (res.result) {
            alert('Login Successful');
            this.router.navigate(['/dashboard']);
          }else{
            alert(res.message);
          }
        },
        error: (err) => {
          console.error('Login Failed', err);
        }
      });
    }
  }

}
