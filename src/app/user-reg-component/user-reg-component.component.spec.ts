import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegComponentComponent } from './user-reg-component.component';

describe('UserRegComponentComponent', () => {
  let component: UserRegComponentComponent;
  let fixture: ComponentFixture<UserRegComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
