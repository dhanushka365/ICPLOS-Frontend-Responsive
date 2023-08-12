import { Component } from '@angular/core';
import { Book, Books } from '../book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[]= Books;
}
