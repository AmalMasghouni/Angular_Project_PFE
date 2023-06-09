import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelComponent } from './devel.component';

describe('DevelComponent', () => {
  let component: DevelComponent;
  let fixture: ComponentFixture<DevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
