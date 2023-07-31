import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrationComponent } from './registration/registration.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HeaderComponent, RegistrationComponent],
  imports: [
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [HeaderComponent, RegistrationComponent],
})
export class UserModule {}
