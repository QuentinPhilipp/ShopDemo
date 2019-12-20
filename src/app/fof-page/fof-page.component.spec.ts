import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FofPageComponent } from './fof-page.component';

describe('FofPageComponent', () => {
  let component: FofPageComponent;
  let fixture: ComponentFixture<FofPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FofPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FofPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
