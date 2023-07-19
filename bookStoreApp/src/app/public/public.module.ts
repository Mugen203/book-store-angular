import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { PublicComponent } from './public.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    HomeComponent,
    AllBooksComponent,
    PublicComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ]
})
export class PublicModule { }
