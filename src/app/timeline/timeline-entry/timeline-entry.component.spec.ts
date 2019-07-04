import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEntryComponent } from './timeline-entry.component';

describe('TimelineEntryComponent', () => {
  let component: TimelineEntryComponent;
  let fixture: ComponentFixture<TimelineEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
