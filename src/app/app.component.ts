import { Component } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: false,
 //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //imports: [RouterOutlet, MatToolbarModule, MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule],
})
export class AppComponent {
  title = 'crypto-tracker';
  selectedCurrency: string = "EUR";
  /**
   *
   */
  constructor() {
    
  }

  sendCurrency(event: string){
    console.log(event);
  }
}
