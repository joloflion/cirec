import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEnCourtComponent } from './session-en-court.component';

describe('SessionEnCourtComponent', () => {
  let component: SessionEnCourtComponent;
  let fixture: ComponentFixture<SessionEnCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionEnCourtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionEnCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
