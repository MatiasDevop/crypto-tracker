import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'crypto-tracker';
  selectedCurrency: string = "EUR";

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
  }

  sendCurrency(event: string){
    console.log(event);
    this.currencyService.setCurrency(event)
  }
}
