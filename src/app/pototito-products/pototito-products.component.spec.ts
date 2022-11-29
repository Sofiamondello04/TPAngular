import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PototitoProductsComponent } from './pototito-products.component';

describe('PototitoProductsComponent', () => {
  let component: PototitoProductsComponent;
  let fixture: ComponentFixture<PototitoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PototitoProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PototitoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
