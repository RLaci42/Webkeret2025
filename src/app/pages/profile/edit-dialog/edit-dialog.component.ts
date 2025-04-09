import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../models/user';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-dialog',
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.scss'
})
export class EditDialogComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.form = this.fb.group({
      name: this.fb.group({
        lastName: [data.name?.lastName || ''],
        firstName: [data.name?.firstName || '']
      }),
      phone: [data.phone || '', [Validators.pattern('^[0-9]*$')]],
      address: this.fb.group({
        postalCode: [data.address?.postalCode || '', [Validators.pattern('^[0-9]*$')]],
        city: [data.address?.city || ''],
        street: [data.address?.street || ''],
        number: [data.address?.number || '', [Validators.pattern('^[0-9]*$')]],
      })
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    const updatedUser: User = {
      ...this.data,
      name: {
        lastName: this.form.value.name.lastName,
        firstName: this.form.value.name.firstName,
      },
      phone: this.form.value.phone,
      address: this.form.value.address
    };

    this.dialogRef.close(updatedUser);
  }

}
