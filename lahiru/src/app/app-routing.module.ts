import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NewBookFormComponent } from './component/new-book-form/new-book-form.component';
import { BookTableComponent } from './component/book-table/book-table.component';

const routes: Routes = [
  {path: '', component: BookTableComponent},
  {path: 'book/new', component: NewBookFormComponent},
  {path: 'newBookForm', component: NewBookFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
