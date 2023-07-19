import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "../user/user.component";
import {AddBookComponent} from "../user/components/add-book/add-book.component";
import {DeleteBookComponent} from "../user/components/delete-book/delete-book.component";
import {PublicComponent} from "./public.component";
import {AllBooksComponent} from "./components/all-books/all-books.component";
import {HomeComponent} from "./components/home/home.component";
import {BookDetailsComponent} from "./components/book-details/book-details.component";

const routes: Routes = [
  {path:'public', component: PublicComponent, children:[
      {path:'all-books', component:AllBooksComponent},
      {path:'book-details', component:BookDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
