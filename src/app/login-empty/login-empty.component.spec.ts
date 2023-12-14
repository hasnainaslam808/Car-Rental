import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmptyComponent } from './login-empty.component';

describe('LoginEmptyComponent', () => {
  let component: LoginEmptyComponent;
  let fixture: ComponentFixture<LoginEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEmptyComponent]
    });
    fixture = TestBed.createComponent(LoginEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
