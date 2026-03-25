import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFouund } from './not-fouund';

describe('NotFouund', () => {
  let component: NotFouund;
  let fixture: ComponentFixture<NotFouund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFouund]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFouund);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
