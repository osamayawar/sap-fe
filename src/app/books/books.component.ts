import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  	selector: 'app-books',
  	templateUrl: './books.component.html',
  	styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
	books = [];
	constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

	ngAfterViewInit(): void {
		this.getListOfBooks();
	}

  	private getListOfBooks() {
    	this.httpClient.get('/assets/books.json').subscribe(listOfBooks => {
          this.books.push(listOfBooks);
    	});
  	}
}
