import { Component, OnInit,  Input, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  	selector: 'app-books',
  	templateUrl: './books.component.html',
  	styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
	books = [];
	constructor(private httpClient: HttpClient) { }
  @Input() selectedSortingOption: String;

  ngOnInit() {
    this.getListOfBooks();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.selectedSortingOption.currentValue) {
      this.sortBooks(changes.selectedSortingOption.currentValue.value);
    }
  }

  private getListOfBooks() {
    this.httpClient.get('/assets/books.json').subscribe(listOfBooks => {
        this.books.push(listOfBooks);
        this.sortBooks(null);
    });
  }

  private sortBooks(sortingOption) {
    this.books[0].sort((a, b) => {
      const firstTitle = a.title.toUpperCase();
      const secondTitle = b.title.toUpperCase();
      const firstVoteCount = a.votes.toString().toUpperCase();
      const secondVoteCount = b.votes.toString().toUpperCase();
      switch(sortingOption) {
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
}
