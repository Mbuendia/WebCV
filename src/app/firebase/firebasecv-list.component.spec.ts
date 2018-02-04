import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasecvListComponent } from './firebasecv-list.component';

describe('ArticleComponent', () => {
  let component: FirebasecvListComponent;
  let fixture: ComponentFixture<FirebasecvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasecvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasecvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
