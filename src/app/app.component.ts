import { Component, OnInit } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { CurrencyService } from './services/currency.service';
import { concatMap, delay, from, map, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
 //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //imports: [RouterOutlet, MatToolbarModule, MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule],
})
export class AppComponent implements OnInit{
  title = 'crypto-tracker';
  selectedCurrency: string = "EUR";
  
  // understanting map
  foo$ = from([1,2,3,4,5]).pipe(map((item) => item * 10));

  constructor(private currencyService: CurrencyService) {
    const example = (operator: any) => () => {
      from([0,1,2,3,4])
        .pipe(operator((x: any) => of(x).pipe(delay(500))))
        .subscribe({
          next: (v) => console.log(v), //res
          error: (e) => console.error(e), //err
          complete: () => console.log(`${operator.name} completed`)//completed
        });
    };

    //example(mergeMap)();
    example(concatMap)();
    //example(switchMap)();
  }


  ngOnInit(): void {
    //this.foo$.subscribe(console.log);
    //console.log(this.foo$);
  }

  sendCurrency(event: string){
    console.log(event);
    this.currencyService.setCurrency(event)
  }
}
