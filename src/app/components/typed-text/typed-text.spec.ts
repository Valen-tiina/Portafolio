import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedText } from './typed-text';

describe('TypedText', () => {
  let component: TypedText;
  let fixture: ComponentFixture<TypedText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypedText],
    }).compileComponents();

    fixture = TestBed.createComponent(TypedText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
