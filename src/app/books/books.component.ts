import { Component, OnInit,  Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnChanges {
  staticBooksList = [];
  books = [];
  bookCategory: string = null;
  @Input() selectedSortingOption: string;
  @Input() selectedBookCategory: string;
  @Output() listOfBooks: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getListOfBooks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedSortingOption && changes.selectedSortingOption.currentValue) {
      this.sortBooks(changes.selectedSortingOption.currentValue.value);
    }

    if (changes.selectedBookCategory && changes.selectedBookCategory.currentValue) {
      this.showBooksForSelectedCategory(changes.selectedBookCategory.currentValue);
    }
  }

  private getListOfBooks(): void {
    this.httpClient.get('/assets/books.json').subscribe(listOfBooks => {
        this.books.push(listOfBooks);
        this.staticBooksList = this.books; //Keep the original copy as the book array may change while selecting different category
        this.listOfBooks.emit(this.books); //emit the list of books to app component
        this.sortBooks(null);
    });
  }

  /**
   *
   * @param sortingOption
   * Sort the books as per users selection.
   * The method offers sorty by Title (A-Z/Z-A) and number of votes
   */
  private sortBooks(sortingOption): void {
    this.books[0].sort((a, b) => {
      const firstTitle = a.title.toUpperCase();
      const secondTitle = b.title.toUpperCase();
      const firstVoteCount = a.votes.toString().toUpperCase();
      const secondVoteCount = b.votes.toString().toUpperCase();
      switch (sortingOption) {
        case 'Title A-Z':
          return firstTitle.localeCompare(secondTitle);
          break;
        case 'Title Z-A':
          return secondTitle.localeCompare(firstTitle);
          break;
        case 'Votes Asc':
          return firstVoteCount - secondVoteCount;
          break;
        case 'Votes Desc':
          return secondVoteCount - firstVoteCount;
          break;
      }
    });
  }

  /**
   *
   * @param selectedCategory
   * This method is used to show the list of books that falls under the selected category
   */
  private showBooksForSelectedCategory(selectedCategory) {
    let listOfBooks = this.staticBooksList;
    this.books = [];
    if(listOfBooks.length > 0) {
      listOfBooks[0].forEach(book => {
        if(book.category === selectedCategory) {
          this.books[0] = [];
          this.books[0].push(book);
        }
      });
    }
  }
}
