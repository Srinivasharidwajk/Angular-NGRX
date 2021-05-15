import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaHutComponent } from './pizza-hut.component';

describe('PizzaHutComponent', () => {
  let component: PizzaHutComponent;
  let fixture: ComponentFixture<PizzaHutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaHutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaHutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
