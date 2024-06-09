import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdvComponent } from './hdv.component';

describe('HdvComponent', () => {
  let component: HdvComponent;
  let fixture: ComponentFixture<HdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
