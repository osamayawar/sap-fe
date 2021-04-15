import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TextCharLimit } from './pipes/text-char-limit.pipe';
import { MatSelectModule } from '@angular/material/select';
import { SortingComponent } from './sorting/sorting.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    TextCharLimit,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
