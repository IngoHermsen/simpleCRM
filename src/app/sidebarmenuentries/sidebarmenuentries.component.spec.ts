import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmenuentriesComponent } from './sidebarmenuentries.component';

describe('SidebarmenuentriesComponent', () => {
  let component: SidebarmenuentriesComponent;
  let fixture: ComponentFixture<SidebarmenuentriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarmenuentriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarmenuentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
