import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageElectionComponent } from './manage-election.component';

describe('ManageElectionComponent', () => {
  let component: ManageElectionComponent;
  let fixture: ComponentFixture<ManageElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
