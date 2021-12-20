import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostavipComponent } from './postavip.component';

describe('PostavipComponent', () => {
  let component: PostavipComponent;
  let fixture: ComponentFixture<PostavipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostavipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostavipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
