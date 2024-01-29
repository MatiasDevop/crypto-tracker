import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-coin-list',
  //standalone: true,
  //imports: [],
  templateUrl: './coin-list.component.html',
  styleUrl: './coin-list.component.scss'
})
export class CoinListComponent implements OnInit {

  bannerData: any = [];

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService) { 
  }

  ngOnInit(): void{
    this.getAllData();
    this.getBannerData();
  }

  getBannerData(){
    this.api.getTrendingCurrency('USD')
      .subscribe(res =>{
        this.bannerData = res;
        console.log(res);
      })
  }

  getAllData(){
    this.api.getCurrencyData('EUR')
      .subscribe(res =>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}

