import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimanjeDetaljnoComponent } from './primanje-detaljno.component';

describe('PrimanjeDetaljnoComponent', () => {
  let component: PrimanjeDetaljnoComponent;
  let fixture: ComponentFixture<PrimanjeDetaljnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimanjeDetaljnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimanjeDetaljnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
