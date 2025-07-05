import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usuarios: User[] = [
    {
      cedula: '0102030405',
      nombres: 'Juan Carlos',
      apellidos: 'Pérez López',
      email: 'juan.perez@example.com',
      telefono: '0991234567',
      tipo_contrato: '',
      dedicacion: '',
      estado: 'Activo',
      password: '1234',
      rol: 'docente',
    },
    {
      cedula: '0607080910',
      nombres: 'María Fernanda',
      apellidos: 'Gómez Sánchez',
      email: 'maria.gomez@example.com',
      telefono: '0987654321',
      tipo_contrato: '',
      dedicacion: '',
      estado: 'Activo',
      password: '1234',         // <--- AGREGADO
      rol: 'docente',  
    },
    {
      cedula: '1101121314',
      nombres: 'Luis Alberto',
      apellidos: 'Ramírez Torres',
      email: 'luis.ramirez@example.com',
      telefono: '0976543210',
      tipo_contrato: 'Medio tiempo',
      dedicacion: 'AUX1',
      estado: 'Activo',
      password: '1234',         // <--- AGREGADO
      rol: 'docente',  
    },
  ];

  saveUser(newUser: User): void {
    this.usuarios = [...this.usuarios, newUser];
  }

  editUser(usuarioEditado: User): void {
    this.usuarios = this.usuarios.map((user) =>
      user.cedula === usuarioEditado.cedula
        ? { ...user, ...usuarioEditado }
        : user
    );
  }

  get getUsers(): User[] {
    return [...this.usuarios];
  }

 deleteUser(cedula: string): void {
  this.usuarios = this.usuarios.filter((user) => user.cedula !== cedula);
 }
}
