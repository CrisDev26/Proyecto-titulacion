import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {
  private _userService = inject(UserService);
  private dialogRef = inject(MatDialogRef<DeleteModalComponent>);
  private data = inject(MAT_DIALOG_DATA);

  deleteUser(){
    this._userService.deleteUser(this.data);
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }
  
}
