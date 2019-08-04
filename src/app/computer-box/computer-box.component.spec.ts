import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerBoxComponent } from './computer-box.component';

describe('ComputerBoxComponent', () => {
  let component: ComputerBoxComponent;
  let fixture: ComponentFixture<ComputerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
