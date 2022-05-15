import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Noticia } from '../interfaces/noticia.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

<<<<<<< HEAD
  baseUrl:string = 'http://api.mediastack.com/v1/news?access_key=cda3c25af38aa29e0ee7678d85a8031e&categories=science&keywords=endangered marine'
=======
  baseUrl:string = ('http://api.mediastack.com/v1/news?access_key=6fc178ab9ab5f63240ce50f6ea67c9d1&categories=science&keywords=endangered marine&limit= 8')
>>>>>>> 6b1e730 (FooteryAbout)

  constructor(private http:HttpClient) { }

  getDatosNoticias(){
    return this.http.get<Noticia>(this.baseUrl).pipe(
      map(resp=>{
        return resp.data
      })
    )
  }
 
}
