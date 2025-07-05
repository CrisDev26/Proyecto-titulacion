import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog'; // Eliminar esta línea
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
  @Output() close = new EventEmitter<void>(); // Evento para cerrar el modal
  @Output() userRegistered = new EventEmitter<User>(); // Evento para notificar registro

  private fb = inject(FormBuilder);
  // private dialogRef = inject(MatDialogRef<FormRegisterUserComponent>); // Eliminar esta línea
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
      password: ['', Validators.required],
      rol: ['', Validators.required],
      estado: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.usuarioRegisterForm.valid) {
      this._userService.saveUser(this.usuarioRegisterForm.value as User).subscribe({
        next: () => {
          this.userRegistered.emit(this.usuarioRegisterForm.value as User);
          this.close.emit();
        }
      });
    }
  }

  onClose() {
    this.close.emit();
  }
}
