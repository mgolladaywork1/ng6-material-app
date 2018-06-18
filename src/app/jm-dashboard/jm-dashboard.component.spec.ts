
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmDashboardComponent } from './jm-dashboard.component';

describe('JmDashboardComponent', () => {
  let component: JmDashboardComponent;
  let fixture: ComponentFixture<JmDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JmDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
