import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoznakeComponent } from './doznake.component';

describe('DoznakeComponent', () => {
  let component: DoznakeComponent;
  let fixture: ComponentFixture<DoznakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoznakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoznakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
