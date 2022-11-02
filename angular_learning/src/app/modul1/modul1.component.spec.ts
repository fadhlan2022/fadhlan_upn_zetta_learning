import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modul1Component } from './modul1.component';

describe('Modul1Component', () => {
  let component: Modul1Component;
  let fixture: ComponentFixture<Modul1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modul1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modul1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
