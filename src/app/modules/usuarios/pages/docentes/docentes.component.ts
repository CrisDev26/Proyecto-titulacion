import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { UserService } from '../../services/user.service'; // Ruta relativa al servicio
import { User } from '../../interfaces/user.interface';
import { FormRegisterUserComponent } from '../../components/form-register-user/form-register-user.component'; // Importa el componente del formulario

@Component({
  selector: 'app-docentes',
  standalone: true, // Standalone component
  imports: [CommonModule, FormRegisterUserComponent], // Agrega el formulario aquí
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  usuarios: User[] = [];
  showRegisterModal = false; // Controla la visibilidad del modal

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.userService.getUsers().subscribe({
      next: (users) => this.usuarios = users,
      error: (err) => console.error('Error cargando usuarios:', err)
    });
  }

  agregarUsuario(usuario: User) {
    this.userService.saveUser(usuario).subscribe({
      next: () => this.cargarUsuarios(),
      error: (err) => console.error('Error agregando usuario:', err)
    });
  }

  editarUsuario(usuario: User) {
    this.userService.editUser(usuario).subscribe({
      next: () => this.cargarUsuarios(),
      error: (err) => console.error('Error editando usuario:', err)
    });
  }

  eliminarUsuario(cedula: string) {
    this.userService.deleteUser(cedula).subscribe({
      next: () => this.cargarUsuarios(),
      error: (err) => console.error('Error eliminando usuario:', err)
    });
  }

  // Métodos para abrir modales (ahora controlan la visibilidad)
  openSaveModal() { this.showRegisterModal = true; }
  closeSaveModal() { this.showRegisterModal = false; }
  openEditarModal(user: User) {}
  openDeleteModal(cedula: string) {}
  openViewModal(user: User) {}

  // Método para trackBy en *ngFor
  trackByCedula(index: number, user: User) {
    return user.cedula;
  }
}
