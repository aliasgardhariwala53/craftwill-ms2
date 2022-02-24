import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWillComponent } from './my-will.component';

describe('MyWillComponent', () => {
  let component: MyWillComponent;
  let fixture: ComponentFixture<MyWillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
