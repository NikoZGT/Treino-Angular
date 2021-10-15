import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImgComponent } from './text-img.component';

describe('TextImgComponent', () => {
  let component: TextImgComponent;
  let fixture: ComponentFixture<TextImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
