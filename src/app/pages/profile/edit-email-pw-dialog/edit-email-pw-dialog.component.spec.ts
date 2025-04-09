import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailPwDialogComponent } from './edit-email-pw-dialog.component';

describe('EditEmailPwDialogComponent', () => {
  let component: EditEmailPwDialogComponent;
  let fixture: ComponentFixture<EditEmailPwDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEmailPwDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmailPwDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
