import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ILoginForm } from '../../interfaces/login-form.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  protected imgUrl: string =
    'https://avatars.githubusercontent.com/u/124091983';
  loginForm!: FormGroup<ILoginForm>;
  /**
   *
   */
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/),
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submit(): void {
    if (this.loginForm.valid) {
      console.info('the form is valid');
    } else {
      console.error('Oops, There are Error in The field');
    }
  }
}
