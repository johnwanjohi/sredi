import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrAndEdSummaryComponent } from './sr-and-ed-summary.component';

describe('SrAndEdSummaryComponent', () => {
  let component: SrAndEdSummaryComponent;
  let fixture: ComponentFixture<SrAndEdSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SrAndEdSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrAndEdSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
