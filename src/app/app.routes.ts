import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/routes/auth.routes'),
    },
    {
        path: 'users',
        loadChildren: () => import('./modules/usuarios/routes/usuarios.routes'),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./modules/home/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/routes/admin.routes'),
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
