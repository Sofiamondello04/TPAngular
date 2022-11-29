import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PototitoAboutComponent } from './pototito-about.component';

describe('PototitoAboutComponent', () => {
  let component: PototitoAboutComponent;
  let fixture: ComponentFixture<PototitoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PototitoAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PototitoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
