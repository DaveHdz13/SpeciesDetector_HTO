import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NewsComponent } from './pages/news/news.component';
import { AnimalsDangerComponent } from './pages/animals-danger/animals-danger.component';
import { AboutComponent } from './pages/about/about.component';
import { OverlayComponent } from './components/overlay/overlay.component';


@NgModule({
  declarations: [
    NewsComponent,
    AnimalsDangerComponent,
    AboutComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EnciclopediaModule { }
