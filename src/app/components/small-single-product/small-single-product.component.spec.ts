import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSingleProductComponent } from './small-single-product.component';

describe('SmallSingleProductComponent', () => {
  let component: SmallSingleProductComponent;
  let fixture: ComponentFixture<SmallSingleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSingleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
