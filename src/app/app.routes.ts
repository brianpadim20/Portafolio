import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path:'','title':'Soubre mi',component: AboutComponent},
    {path:'sobre-mi','title':'Soubre mi', component: AboutComponent},
    {path:'proyectos','title':'Proyectos', component: ProjectsComponent},
    {path:'contacto','title':'Contacto', component:ContactComponent},
    {path:'crear-proyecto','title':'Crear Proyecto', component: CreateComponent},
    {path:'proyecto/:id','title':'Proyecto', component:DetailComponent},
    {path:'editar-proyecto/:id','title':'Editar proyecto', component: EditComponent},
    {path:'**','title':'Error', component: ErrorComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule{}
export const appRoutingProviders: any [] = []; //Exportar el servicio de rutas:
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);//yExportar el routing