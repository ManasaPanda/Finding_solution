import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChangePasswordService } from '../../services/change-password.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

  message_display!: string
  iferror: boolean = false
  constructor(private router: ActivatedRoute, private changePasswordService: ChangePasswordService, private matdialogref: MatDialogRef<ChangePasswordComponent>) {
  }
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  passwordStrength: string = '';
  passwordStrengthClass: string = '';

  calculatePasswordStrength(): void {
    const length = this.newPassword.length;

    if (length === 0) {
      this.passwordStrength = '';
      this.passwordStrengthClass = '';
    } else if (length < 3) {
      this.passwordStrength = 'Weak';
      this.passwordStrengthClass = 'password-weak';
    } else if (length < 6) {
      this.passwordStrength = 'Medium';
      this.passwordStrengthClass = 'password-medium';
    } else {
      this.passwordStrength = 'Strong';
      this.passwordStrengthClass = 'password-strong';
    }
  }
  passwordsMatch(): boolean {
    if (this.newPassword != '') {
      return this.newPassword === this.confirmPassword;
    }
    return false
  }

  formIsValid(): boolean {
    return this.oldPassword !== '' && this.newPassword !== '' && this.confirmPassword !== '' && this.passwordsMatch();
  }

  changePassword(): void {
    if (this.formIsValid()) {
      this.changePasswordService.changepassword(this.oldPassword, this.newPassword).
        subscribe(
          (res: any) => {
            this.message_display = JSON.parse(JSON.stringify(res)).message;
            setTimeout(() => {
              this.message_display = ''
            }, 1000);
            this.oldPassword = '';
            this.newPassword = '';
            this.confirmPassword = '';
          },
          (Error: HttpErrorResponse) => {
            this.message_display = Error.error.message
            this.iferror = true
            setTimeout(() => {
              this.message_display = ''
            }, 1000);
          }
        );
    } else {
      console.error('Form is invalid');
    }
  }
  close() {
    this.matdialogref.close();
  }
}
