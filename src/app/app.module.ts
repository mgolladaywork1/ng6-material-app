import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MymatTableComponent } from './mymat-table/mymat-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MjNavComponent } from './mj-nav/mj-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { JmDashboardComponent } from './jm-dashboard/jm-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MymatTableComponent,
    MjNavComponent,
    JmDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
