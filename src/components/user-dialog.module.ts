import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { RouterOutlet } from '@angular/router';
import { UserDialogComponent } from './user-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    UserDialogComponent,
  ],
  imports: [
    CommonModule, 
    RouterOutlet, 
    MatInputModule, 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatRadioModule, 
    BrowserModule, 
    HttpClientModule, 
    MatRadioModule, 
    MatSelectModule, 
    BrowserAnimationsModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [UserDialogComponent]
})
export class UserDialogModule { }
