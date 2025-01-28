import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWhyMeComponent } from './main-why-me.component';

describe('MainWhyMeComponent', () => {
  let component: MainWhyMeComponent;
  let fixture: ComponentFixture<MainWhyMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainWhyMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainWhyMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
