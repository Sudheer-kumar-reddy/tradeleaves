import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductList } from './product-list'


@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  constructor(private httpClient: HttpClient) { }

  // url = "https://pastebin.com/raw/kg0MSAJm";
  private url = "/assets/data/db.json";

  getProudct(): Observable<ProductList[]> {
    return this.httpClient.get<ProductList[]>(this.url);
  }

  
}
