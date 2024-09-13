import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,MatIcon,MatToolbar,MatLabel,MatFormFieldModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], 
})
export class HeaderComponent {
constructor(){
}
}
