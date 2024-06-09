import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatList } from '@angular/material/list';

@Component({
  selector: 'app-hdv',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatList],
  templateUrl: './hdv.component.html',
  styleUrl: './hdv.component.css'
})
export class HdvComponent {

}
