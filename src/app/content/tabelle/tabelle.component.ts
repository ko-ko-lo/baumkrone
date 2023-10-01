import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  rang: number;
  unternehmen: string;
  land: string;
  emissionen: number; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { rang: 1, unternehmen: 'Saudi Aramco', land: 'Saudi-Arabien', emissionen: 1951 },
  { rang: 2, unternehmen: 'Gazprom', land: 'Russland', emissionen: 1138 },
  { rang: 3, unternehmen: 'National Iranian Oil Company', land: 'Iran', emissionen: 1036 },
  { rang: 4, unternehmen: 'Coal India', land: 'Indien', emissionen: 1025 },
  { rang: 5, unternehmen: 'China Shenhua Energy', land: 'Volksrepublik China', emissionen: 1001 },
  { rang: 6, unternehmen: 'Rosneft', land: 'Russland', emissionen: 777 },
  { rang: 7, unternehmen: 'China National Petroleum Corporation', land: 'Volksrepublik China', emissionen: 625 },
  { rang: 8, unternehmen: 'Abu Dhabi National Oil Company', land: 'Vereinigte Arabische Emirate', emissionen: 584 },
  { rang: 9, unternehmen: 'ExxonMobil', land: 'Vereinigte Staaten', emissionen: 577 },
  { rang: 10, unternehmen: 'PEMEX', land: 'Mexiko', emissionen: 530 },
  { rang: 11, unternehmen: 'Royal Dutch Shell', land: 'Niederlande', emissionen: 508 },
  { rang: 12, unternehmen: 'Sonatrach', land: 'Algerien', emissionen: 492 },
  { rang: 13, unternehmen: 'Kuwait Petroleum Corporation', land: 'Kuwait', emissionen: 478 },
  { rang: 14, unternehmen: 'BP', land: 'Vereinigtes Königreich', emissionen: 448 },
  { rang: 15, unternehmen: 'Qatar Petroleum', land: 'Katar', emissionen: 414 },
  { rang: 16, unternehmen: 'Petróleos de Venezuela', land: 'Venezuela', emissionen: 398 },
  { rang: 17, unternehmen: 'Peabody Energy', land: 'Vereinigte Staaten', emissionen: 397 },
  { rang: 18, unternehmen: 'Iraq National Oil Company', land: 'Irak', emissionen: 391 },
  { rang: 19, unternehmen: 'Petrobras', land: 'Brasilien', emissionen: 382 },
  { rang: 20, unternehmen: 'Chevron Corporation', land: 'Vereinigte Staaten', emissionen: 377 },
  { rang: 21, unternehmen: 'Datong Coal Mining', land: 'Volksrepublik China', emissionen: 365 },
  { rang: 22, unternehmen: 'China National Coal', land: 'Volksrepublik China', emissionen: 350 },
  { rang: 23, unternehmen: 'Petronas', land: 'Malaysia', emissionen: 340 },
  { rang: 24, unternehmen: 'Nigerian National Petroleum Corporation', land: 'Nigeria', emissionen: 329 },
  { rang: 25, unternehmen: 'Lukoil', land: 'Russland', emissionen: 328 },
  { rang: 26, unternehmen: 'Glencore', land: 'Schweiz', emissionen: 322 },
  { rang: 27, unternehmen: 'BHP Group', land: 'Australien', emissionen: 317 },
  { rang: 28, unternehmen: 'Shanxi Coking Coal', land: 'Volksrepublik China', emissionen: 317 },
  { rang: 29, unternehmen: 'Shandong Energy', land: 'Volksrepublik China', emissionen: 314 },
  { rang: 30, unternehmen: 'Total', land: 'Frankreich', emissionen: 311 }, 
];


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tabelle',
  styleUrls: [ './tabelle.component.css' ],
  templateUrl: './tabelle.component.html',
})
export class TabelleComponent implements AfterViewInit{
  displayedColumns: string[] = ['rang', 'unternehmen', 'land', 'emissionen'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}