import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form-edit-user',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-view-user.component.html',
  styleUrl: './form-view-user.component.css',
})
export class FormViewUserComponent {
  // Formulario reactivo
  usuarioForm: FormGroup;
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<FormViewUserComponent>);
  private data = inject(MAT_DIALOG_DATA);
  private _userSerice = inject(UserService);

  constructor() {
    // Crear el formulario reactivo
    this.usuarioForm = this.fb.group({
      cedula: [this.data.cedula, [Validators.required]],
      nombres: [this.data.nombres, [Validators.required]],
      apellidos: [this.data.apellidos, [Validators.required]],
      email: [this.data.email, [Validators.required, Validators.email]],
      telefono: [this.data.telefono, [Validators.required]],
      dedicacion: [this.data.dedicacion, [Validators.required]],
      tipo_contrato: [this.data.tipo_contrato, [Validators.required]],
      estado: [this.data.estado, [Validators.required]],
    });
  }

  // onSubmit() {
  //   if (this.usuarioForm.valid) {
  //     this.dialogRef.close(this.usuarioForm.value);
  //   }
  // }

  onClose() {
    this.dialogRef.close();
  }

  // actualizarUsuario(): void {
  //   const datosFormulario = this.usuarioForm.value as User;
  //   this._userSerice.editUser(datosFormulario);
  // }
}
