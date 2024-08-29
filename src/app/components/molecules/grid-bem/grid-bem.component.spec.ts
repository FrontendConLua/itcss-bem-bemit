import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBemComponent } from './grid-bem.component';

describe('GridBemComponent', () => {
  let component: GridBemComponent;
  let fixture: ComponentFixture<GridBemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridBemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridBemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
