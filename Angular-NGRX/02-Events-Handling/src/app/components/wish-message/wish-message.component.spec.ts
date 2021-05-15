import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishMessageComponent } from './wish-message.component';

describe('WishMessageComponent', () => {
  let component: WishMessageComponent;
  let fixture: ComponentFixture<WishMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
