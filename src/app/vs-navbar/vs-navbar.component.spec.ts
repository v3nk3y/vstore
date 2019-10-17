import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsNavbarComponent } from './vs-navbar.component';

describe('VsNavbarComponent', () => {
  let component: VsNavbarComponent;
  let fixture: ComponentFixture<VsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
