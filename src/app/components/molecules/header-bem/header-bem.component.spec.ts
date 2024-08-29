import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBemComponent } from './header-bem.component';

describe('HeaderBemComponent', () => {
  let component: HeaderBemComponent;
  let fixture: ComponentFixture<HeaderBemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
