import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthCodeService } from '../service/auth-code.service';




@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    username='';
    password='';
    invalidLogin=false;
    errorMessage = 'invalid cordinates'

    constructor(private authCodeService : AuthCodeService,
        private formBuilder: FormBuilder,
        
        private router: Router,
        
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

       
    }
    handleLogin() {
        
        if(this.authCodeService.authentification(this.f.username.value, this.f.password.value)) {
          //Redirect to Welcome Page
          this.router.navigate(['welcome'])
          this.invalidLogin = false
        } else {
          this.invalidLogin = true
        }
      }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        
    }
}
