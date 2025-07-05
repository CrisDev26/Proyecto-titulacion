import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-register-user',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-register-user.component.html',
  styleUrl: './form-register-user.component.css',
})
export class FormRegisterUserComponent {
  // Formulario reactivo
  usuarioRegisterForm: FormGroup;

  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<FormRegisterUserComponent>);
  private _userService = inject(UserService);

  constructor() {
    // Crear el formulario reactivo
    this.usuarioRegisterForm = this.fb.group({
      cedula: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      tipo_contrato: ['', [Validators.required]],
      dedicacion: ['', [Validators.required]],
      password: ['', Validators.required],   // <-- NUEVO
      rol: ['', Validators.required],  
      estado: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.usuarioRegisterForm.valid) {
      this._userService.saveUser(this.usuarioRegisterForm.value as User);
      this.dialogRef.close(this.usuarioRegisterForm.value);
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
