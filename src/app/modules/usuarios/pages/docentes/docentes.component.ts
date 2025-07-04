import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditUserComponent } from '../../components/form-edit-user/form-edit-user.component';
import { User } from '../../interfaces/user.interface';
import { DeleteModalComponent } from '../../components/delete-modal/delete-modal.component';
import { FormRegisterUserComponent } from '../../components/form-register-user/form-register-user.component';
import { FormViewUserComponent } from '../../components/form-view-user/form-view-user.component';

@Component({
  selector: 'app-docentes',
  imports: [],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.css',
})
export class DocentesComponent {
  private _userService = inject(UserService);
  private dialog = inject(MatDialog);

  usuarios: User[] = [];

  openSaveModal() {
    const dialogRef = this.dialog.open(FormRegisterUserComponent, {
      width: '500px',
    });
  }

  openEditarModal(usuario: User) {
    const dialogRef = this.dialog.open(FormEditUserComponent, {
      width: '500px',
      data: usuario,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this._userService.editUser(result);
    //     console.log('Usuario editado:', result);
    //   }
    // });
  }

  openDeleteModal(cedula: string) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: cedula,
    });
  }

  openViewModal(usuario: User) {
    const dialogRef = this.dialog.open(FormViewUserComponent, {
      data: usuario,
    });
  }

  get getUsers() {
    return this._userService.getUsers;
  }
}
