import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegComponentComponent } from './user-reg-component/user-reg-component.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	standalone: false,
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'myFlix-Angular-client';

	constructor(public dialog: MatDialog) {}
	openUserRegistrationDialog(): void {
		this.dialog.open(UserRegComponentComponent, {
			width: '280px',
		});
	}
}
