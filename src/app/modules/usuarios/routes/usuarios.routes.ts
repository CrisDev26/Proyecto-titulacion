import { Routes } from '@angular/router';
import { UsuarioLayoutComponent } from '../layout/usuario-layout/usuario-layout.component';
import { DocentesComponent } from '../pages/docentes/docentes.component';

export const Usersroutes: Routes = 
[
    {
        path: '',
        component: UsuarioLayoutComponent,
        children: [
            {
                path: 'docente-crud',
                component: DocentesComponent
            },
            
            {
                path: '**',
                redirectTo: 'docente-crud'
            }
        ]
    }
];

export default Usersroutes;