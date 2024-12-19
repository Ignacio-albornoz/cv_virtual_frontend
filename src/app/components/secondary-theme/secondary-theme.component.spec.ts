import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryThemeComponent } from './secondary-theme.component';

describe('SecondaryThemeComponent', () => {
  let component: SecondaryThemeComponent;
  let fixture: ComponentFixture<SecondaryThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
