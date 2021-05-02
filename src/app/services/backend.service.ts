import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url='http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  registro(ruta:string,body:any){
    return this.http.post(`${this.url}/${ruta}`, body)
  }
}
