
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjNavComponent } from './mj-nav.component';

describe('MjNavComponent', () => {
  let component: MjNavComponent;
  let fixture: ComponentFixture<MjNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MjNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MjNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
