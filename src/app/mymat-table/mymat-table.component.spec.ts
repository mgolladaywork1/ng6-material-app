
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymatTableComponent } from './mymat-table.component';

describe('MymatTableComponent', () => {
  let component: MymatTableComponent;
  let fixture: ComponentFixture<MymatTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MymatTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
