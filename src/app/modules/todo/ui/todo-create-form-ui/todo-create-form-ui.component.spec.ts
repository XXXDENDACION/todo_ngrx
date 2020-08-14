import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreateFormUiComponent } from './todo-create-form-ui.component';

describe('TodoCreateFormUiComponent', () => {
  let component: TodoCreateFormUiComponent;
  let fixture: ComponentFixture<TodoCreateFormUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCreateFormUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
