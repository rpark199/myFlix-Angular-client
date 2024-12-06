import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-user-reg-component',
	standalone: false,

	templateUrl: './user-reg-component.component.html',
	styleUrl: './user-reg-component.component.scss',
})
export class UserRegComponentComponent {
	@Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

	constructor(
		public fetchApiData: FetchApiDataService,
		public dialogRef: MatDialogRef<UserRegComponentComponent>,
		public snackBar: MatSnackBar
	) {}

	registerUser(): void {
		this.fetchApiData.userRegistration(this.userData).subscribe(
			(result) => {
				// Logic for a successful user registration goes here! (To be implemented)
				this.dialogRef.close(); // This will close the modal on success!
				console.log(result);
				this.snackBar.open('user registered successfully!', 'OK', {
					duration: 2000,
				});
			},
			(response) => {
				console.log(response);
				this.snackBar.open(response, 'OK', {
					duration: 2000,
				});
			}
		);
	}
}
