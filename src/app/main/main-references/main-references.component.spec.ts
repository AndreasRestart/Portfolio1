import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReferencesComponent } from './main-references.component';

describe('MainReferencesComponent', () => {
  let component: MainReferencesComponent;
  let fixture: ComponentFixture<MainReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainReferencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
