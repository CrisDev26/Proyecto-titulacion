import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "../layout/admin-layout/admin-layout.component";
import { DocentesComponent } from "../../usuarios/pages/docentes/docentes.component";


export const AdminRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
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
    }, 
];

export default AdminRoutes;