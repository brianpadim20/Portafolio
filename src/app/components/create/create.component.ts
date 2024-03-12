import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//Importo los modelos creados
import { Project } from '../../models/project';

//Importo los servicios creados
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';

//Importar la URL desde el archivo global para subir imagenes
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  standalone: true,
  imports:[
    FormsModule,
  CommonModule
  ],
  
  //Cargo los servicios dentro de la propiedad providers en el decorador
  providers:[ProjectService, UploadService]
})
export class CreateComponent {
  public title: string;
  public project: Project;
  public save_project:any;
  public status:string;
  public filesToUpload:Array<File>;
  public url:string;

  constructor(
    private _projectService: ProjectService, //propiedad del servicio
    private _uploadService: UploadService
  ){
    this.title="Crear proyecto";
    this.project = new Project('','','','',2023,'','');
    this.status="";
    this.filesToUpload=[];
    this.url = Global.url;

  }

  ngOnInit(){}

  onSubmit(){
    //Guardar los datos básicos
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        console.log(response);
        if (response.project){


          //Subir la imagen:

          /*Se le pasa como parámetros: la url de la API, el complemento de la URL de la api para subir imagen,
          el id del projecto (que aparece en la response de cuando se guarda), elemento opcional, el archivo
          a cargar llamando al método files to upload, y finalmente el método llamando imagen del la API tiene
          un nombre en el filePath, poner ese nombre, en este caso es image*/

          this. _uploadService.makeFileRequest(Global.url+"upload-image/"+
          response.project._id, [], this.filesToUpload, 'image').then((result:any)=>{
            this.status="sucess";
            this.save_project = result.project;
          });

        }else{
          this.status="failed"
        }

      },
      error=>{
        console.log(<any>error);

      }
    );

  }fileChangeEvent(fileInput:any){
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

}
