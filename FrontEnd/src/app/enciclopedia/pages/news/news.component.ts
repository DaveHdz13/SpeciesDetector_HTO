import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Datum } from '../../interfaces/noticia.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  noticias:Datum[] = []

  constructor(private servicioNoticia:ServicesService) { }

  ngOnInit(): void {
    this.servicioNoticia.getDatosNoticias()
    .subscribe(resp=>{
      this.noticias = resp;
    })
  }
}
