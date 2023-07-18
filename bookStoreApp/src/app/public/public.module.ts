import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { PublicComponent } from './public.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllBooksComponent,
    PublicComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
