import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sap-fe-interviews';
  selectedSortingOption = null;

  setSelectedSortingOption(sortingOption: string): void {
    this.selectedSortingOption = sortingOption;
  }

}
