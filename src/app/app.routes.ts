import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, createComponent } from "@angular/core"; 
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path:'sobre-mi', component: AboutComponent},
    {path:'proyectos', component: ProjectsComponent},
    {path:'contacto', component:ContactComponent},
    {path:'crear-proyecto', component: CreateComponent},
    {path:'proyecto/:id', component:DetailComponent},
    {path:'editar-proyecto', component: EditComponent},
    {path:'**', component: AboutComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
