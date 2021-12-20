import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlanjeComponent } from './slanje.component';

describe('SlanjeComponent', () => {
  let component: SlanjeComponent;
  let fixture: ComponentFixture<SlanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
