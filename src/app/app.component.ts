import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sap-fe-interviews';
  selectedSortingOption = null;
  books = [];
  selectedBookCategory;

  setListOfBooks(books): void {
    if (books.length > 0) {
      this.books = books[0];
    }
  }

  setSelectedSortingOption(sortingOption: string): void {
    this.selectedSortingOption = sortingOption;
  }

  setSelectedCategory(category): void {
    this.selectedBookCategory = category;
  }

}
