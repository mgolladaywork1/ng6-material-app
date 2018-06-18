import { Component } from '@angular/core';

@Component({
  selector: 'jm-dashboard',
  templateUrl: './jm-dashboard.component.html',
  styleUrls: ['./jm-dashboard.component.css']
})
export class JmDashboardComponent {
  cards = [
    { title: 'Chart', cols: 2, rows: 1 },
    { title: 'Stock Info', cols: 1, rows: 1 },
    { title: 'Stock List', cols: 1, rows: 2 },
    { title: 'Company Info', cols: 1, rows: 1 }
  ];
}
