import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sap-fe-interviews';
  selectedSortingOption = "";

  setSelectedSortingOption(sortingOption) {
    this.selectedSortingOption = sortingOption;
  }

}
