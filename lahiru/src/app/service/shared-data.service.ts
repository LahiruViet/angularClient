import { Injectable } from '@angular/core';
import { Book } from './../model/book';
//import { EBook } from './../model/e-book';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  bookList:Array<any> = [];
  bookIdToEdit: any;
  book: Book;
 // eBook: EBook;

}
