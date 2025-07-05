export interface User {
  cedula: string;
  apellidos: string;
  nombres: string;
  email: string;
  telefono: string;
  tipo_contrato: string;
  dedicacion: string;
  estado: string;
  password: string;   // <--- Contraseña
  rol: string;        // <--- Rol del usuario (docente, alumno, admin, etc.)

}
