import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonaComponent } from './add-persona.component';

describe('AddPersonaComponent', () => {
  let component: AddPersonaComponent;
  let fixture: ComponentFixture<AddPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPersonaComponent]
    });
    fixture = TestBed.createComponent(AddPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
