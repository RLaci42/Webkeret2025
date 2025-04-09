import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, ValidatorFn } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../models/user';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { passwordMatchValidator } from '../../../shared/validators/password-match-validator';

@Component({
  selector: 'app-edit-email-pw-dialog',
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './edit-email-pw-dialog.component.html',
  styleUrl: './edit-email-pw-dialog.component.scss'
})
export class EditEmailPwDialogComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditEmailPwDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.form = this.fb.group({
      email: [data.email || '', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(6)],
      rePassword: ['', Validators.minLength(6)]
    }, { validators: passwordMatchValidator });
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
