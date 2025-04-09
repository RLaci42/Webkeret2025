import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../models/user';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  imports: [
    MatDividerModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() user?: User;
  @Output() onEditProfile: EventEmitter<any> = new EventEmitter();
  @Output() onEditEmailPw: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteProfile: EventEmitter<any> = new EventEmitter();

  editEmailPw() {
    this.onEditEmailPw.emit();
  }

  editProfile() {
      this.onEditProfile.emit();
  }

  deleteProfile() {
    this.onDeleteProfile.emit();
  }
}
