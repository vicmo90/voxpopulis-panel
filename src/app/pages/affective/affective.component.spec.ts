import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectiveComponent } from './affective.component';

describe('AffectiveComponent', () => {
  let component: AffectiveComponent;
  let fixture: ComponentFixture<AffectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
