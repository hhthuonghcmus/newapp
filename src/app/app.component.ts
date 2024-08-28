import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator, MinLengthValidator, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../components/user-dialog.component';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  maxFileSize = 10 * 1024 * 1024;
  registerForm: FormGroup = new FormGroup({
  });

  
  constructor(private fb: FormBuilder, private http: HttpClient, public dialog: MatDialog ){
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', [Validators.required]],
      nationalIDCard: [null, [Validators.required, this.fileSizeValidator.bind(this)]]
    })
  }

  ngOninit() {
    
  }

  onSubmit() {
    if (this.registerForm?.valid) {
      console.log(this.registerForm)
      
      
      this.register().subscribe((response: any) => {
        console.log(response);
      })
    }
    else {
      console.log("Error")
    }
  }

  register() {
    const apiUrl = "https://reqres.in/api/register";
    var data = {
      "email": this.registerForm.get('email')?.value,
      "password": this.registerForm.get('password')?.value,
    }
    return this.http.post(apiUrl, data);
  }

  fetchUsers() {
    this.getUsers().subscribe((response: any) => {
      console.log(response.data)
      this.dialog.open(UserDialogComponent, {
        width: '600px',
        data: response.data
      });
    })
  }

  getUsers(){
    return this.http.get("https://reqres.in/api/users?page=1");
  }

  fileSizeValidator(control: FormControl) {
    const file = control.value;
    if (file && file.size > this.maxFileSize) {
      return { 'fileSize': true };
    }
    return null;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.registerForm.patchValue({
      nationalIDCard: file
    });
  }

}
