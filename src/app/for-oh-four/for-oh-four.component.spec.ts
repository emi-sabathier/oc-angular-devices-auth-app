import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOhFourComponent } from './for-oh-four.component';

describe('ForOhFourComponent', () => {
  let component: ForOhFourComponent;
  let fixture: ComponentFixture<ForOhFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForOhFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForOhFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
