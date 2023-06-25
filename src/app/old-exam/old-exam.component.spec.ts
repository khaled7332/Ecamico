import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldExamComponent } from './old-exam.component';

describe('OldExamComponent', () => {
  let component: OldExamComponent;
  let fixture: ComponentFixture<OldExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
