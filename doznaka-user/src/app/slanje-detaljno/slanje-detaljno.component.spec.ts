import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlanjeDetaljnoComponent } from './slanje-detaljno.component';



describe('SlanjeDetaljnoComponent', () => {
  let component: SlanjeDetaljnoComponent;
  let fixture: ComponentFixture<SlanjeDetaljnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlanjeDetaljnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlanjeDetaljnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
