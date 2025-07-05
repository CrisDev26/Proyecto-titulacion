import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  saveUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, newUser);
  }

  editUser(usuarioEditado: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${usuarioEditado.cedula}`, usuarioEditado);
  }

  deleteUser(cedula: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${cedula}`);
  }
}
