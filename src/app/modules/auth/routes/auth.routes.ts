import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "../layout/auth-layout/auth-layout.component";
import { LoginComponent } from "../pages/login/login.component";

export const AuthRoutes: Routes = 
[
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }
];

export default AuthRoutes;