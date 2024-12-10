import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-registration-form',
	templateUrl: './user-registration-form.component.html',
	styleUrl: './user-registration-form.component.scss',
})
export class UserRegistrationFormComponent implements OnInit {
	@Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };
	ngOnInit(): void {}
	registerUser(): void {}
}
