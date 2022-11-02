import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsInputComponent } from './items-input.component';

describe('ItemsInputComponent', () => {
  let component: ItemsInputComponent;
  let fixture: ComponentFixture<ItemsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
