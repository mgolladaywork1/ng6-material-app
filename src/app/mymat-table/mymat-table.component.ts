import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MymatTableDataSource } from './mymat-table-datasource';

@Component({
  selector: 'mymat-table',
  templateUrl: './mymat-table.component.html',
  styleUrls: ['./mymat-table.component.css']
})
export class MymatTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MymatTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MymatTableDataSource(this.paginator, this.sort);
  }
}
