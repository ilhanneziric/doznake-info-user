import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimanjeComponent } from './primanje.component';

describe('PrimanjeComponent', () => {
  let component: PrimanjeComponent;
  let fixture: ComponentFixture<PrimanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
