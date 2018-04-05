import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrrComponent } from './wrr.component';

describe('WrrComponent', () => {
  let component: WrrComponent;
  let fixture: ComponentFixture<WrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
