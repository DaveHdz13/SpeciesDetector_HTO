import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Noticia } from '../interfaces/noticia.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl:string = 'http://api.mediastack.com/v1/news?access_key=cda3c25af38aa29e0ee7678d85a8031e&categories=science&keywords=endangered marine'

  constructor(private http:HttpClient) { }

  getDatosNoticias(){
    return this.http.get<Noticia>(this.baseUrl).pipe(
      map(resp=>{
        return resp.data
      })
    )
  }
 
}
