import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreateForm } from './recipe-create-form';

describe('RecipeCreateForm', () => {
  let component: RecipeCreateForm;
  let fixture: ComponentFixture<RecipeCreateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCreateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCreateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
