import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.less']
})
export class SortingComponent implements OnInit {
  sortingOptions: String[] = ["Title A-Z", "Title Z-A", "Votes Asc", "Votes Desc"];

  @Output() onOptionSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(option) {
    if(option) {
      this.onOptionSelected.emit(option);
    }
  }

}
