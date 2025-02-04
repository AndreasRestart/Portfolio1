import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProjectsDetailComponent } from './main-projects-detail.component';

describe('MainProjectsDetailComponent', () => {
  let component: MainProjectsDetailComponent;
  let fixture: ComponentFixture<MainProjectsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProjectsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainProjectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
