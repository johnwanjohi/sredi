import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedHoursComponent } from './projected-hours.component';

describe('ProjectedHoursComponent', () => {
  let component: ProjectedHoursComponent;
  let fixture: ComponentFixture<ProjectedHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectedHoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectedHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
