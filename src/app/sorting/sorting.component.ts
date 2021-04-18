import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  sortingOptions: string[] = ['Title A-Z', 'Title Z-A', 'Votes Asc', 'Votes Desc'];

  @Output() optionSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(option): void {
    if (option) {
      this.optionSelected.emit(option);
    }
  }

}
