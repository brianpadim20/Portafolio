import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
  
})
export class MenuComponent {

}
