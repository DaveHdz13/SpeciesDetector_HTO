import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Noticia } from '../interfaces/noticia.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl:string = 'http://api.mediastack.com/v1/news?access_key=6fc178ab9ab5f63240ce50f6ea67c9d1&categories=science&keywords=endangered marine'

  constructor(private http:HttpClient) { }

  getDatosNoticias(){
    return this.http.get<Noticia>(this.baseUrl).pipe(
      map(resp=>{
        return resp.data
      })
    )
  }
 
}
