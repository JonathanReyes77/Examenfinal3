import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PerfilComponent } from './perfil/perfil.component';
import { HdvComponent } from './hdv/hdv.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule,MatCardModule,RouterLink,HdvComponent,PerfilComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examenfinal';
}
