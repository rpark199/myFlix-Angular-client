import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrl: './user-registration-form.component.css',
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

   /**
   * Registers a new user by calling the userRegistration method from fetchApiData service.
   * On successful registration, it closes the dialog, shows a success message, and navigates to the welcome page.
   * If registration fails, it shows an error message.
   *
   * @returns {void}
   */
   registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (result: any) => {
        // Close the dialog
        this.dialogRef.close();

        // Show a success message
        this.snackBar.open(
          'User registration successful! Please log in.',
          'OK',
          {
            duration: 2000,
          }
        );

        // Takes you to the login page
        this.router.navigate(['welcome']);
      },
      (error: any) => {
        // Show an error message if the registration fails
        this.snackBar.open(
          'User registration failed: ' + error.error.message,
          'OK',
          {
            duration: 2000,
          }
        );
      }
    );
  }
}
