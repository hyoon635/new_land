import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomPeopleComponent } from './kingdom-people.component';

describe('KingdomPeopleComponent', () => {
  let component: KingdomPeopleComponent;
  let fixture: ComponentFixture<KingdomPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingdomPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingdomPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
