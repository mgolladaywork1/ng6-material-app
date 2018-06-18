import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MymatTableItem {
  name: string;
  id: number;
}

export interface MymatTableItem2 {
  name: string;
  id: number;
  code: string;
  note?: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MymatTableItem[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
  { id: 11, name: 'Sodium' },
  { id: 12, name: 'Magnesium' },
  { id: 13, name: 'Aluminum' },
  { id: 14, name: 'Silicon' },
  { id: 15, name: 'Phosphorus' },
  { id: 16, name: 'Sulfur' },
  { id: 17, name: 'Chlorine' },
  { id: 18, name: 'Argon' },
  { id: 19, name: 'Potassium' },
  { id: 20, name: 'Calcium' },
];

const EXAMPLE1_DATA: MymatTableItem[] = [
  { id: 1, name: 'Abiomed' },
  { id: 2, name: 'Five Below' },
  { id: 3, name: 'China Lodging' },
  { id: 4, name: 'Trade Desk' },
  { id: 5, name: 'Twitter' },
  { id: 6, name: 'Baozun' },
  { id: 7, name: 'Grubhub' },
  { id: 8, name: 'Tal Edu' },
  { id: 9, name: 'Align Tech' },
  { id: 10, name: 'Netflix' },
  { id: 11, name: 'SVB Financial' },
  { id: 12, name: 'Solaredge' },
  { id: 13, name: 'E trade' },
  { id: 14, name: 'Nvidia' },
  { id: 15, name: 'Zto Express' },
  { id: 16, name: 'Ligand Pharma' },
  { id: 17, name: 'Viper Energy' },
  { id: 18, name: 'HealthEquity' },
  { id: 19, name: 'Momo' },
  { id: 20, name: 'Canada Goose' },
  { id: 21, name: 'Kemet Corp' },
  { id: 22, name: 'Palo Alto' },
  { id: 23, name: 'ServiceNow' },
  { id: 24, name: 'Zebra Tech' },
  { id: 25, name: 'Adobe Systems' },
  { id: 26, name: 'Red Hat' },
  { id: 27, name: 'Lululemon' },
  { id: 28, name: 'Arista Networks' },
  { id: 29, name: 'SuperNus Pharma' },
  { id: 30, name: 'Paycom' },
  { id: 31, name: 'Illumina' },
  { id: 32, name: 'Copart' },
  { id: 33, name: 'Old Dominon' },
  { id: 34, name: 'Mastercard' },
  { id: 35, name: 'Atlassian' },
  { id: 36, name: 'Noah' },
  { id: 37, name: 'Micron' },
  { id: 38, name: 'Floor&Decor' },
  { id: 39, name: 'Entegris' },
  { id: 40, name: 'PGT' },
  { id: 41, name: 'IPG Photonics' },
  { id: 42, name: 'Planet Fitness' },
  { id: 43, name: 'Interactive' },
  { id: 44, name: 'Transunion' },
  { id: 45, name: 'BOFI' },
  { id: 46, name: 'Globus Medical' },
  { id: 47, name: 'Alibaba' },
  { id: 48, name: 'Intgrtd Devices' },
  { id: 49, name: 'Match' },
  { id: 50, name: 'Worrior Met Coal' }
];

const EXAMPLE2_DATA: MymatTableItem2[] = [
  { id: 1, code: 'ABMD', name: 'Abiomed' },
  { id: 2, code: 'FIVE', name: 'Five Below Inc' },
  { id: 3, code: 'HTHT', name: 'China Lodging Grp' },
  { id: 4, code: 'TTD', name: 'Trade Desk Inc Cl A' },
  { id: 5, code: 'TWTR', name: 'Twitter Inc' },
  { id: 6, code: 'BZUN', name: 'Baozun Inc Cl A Ads' },
  { id: 7, code: 'GRUB', name: 'Grubhub Inc' },
  { id: 8, code: 'TAL', name: 'Tal Education Gpaads' },
  { id: 9, code: 'ALIGN', name: 'Align Tech' },
  { id: 10, code: 'NFLX', name: 'Netflix' },
  { id: 11, code: 'SIVB', name: 'SVB Financial Grp' },
  { id: 12, code: 'SEDG', name: 'Solaredge Tech' },
  { id: 13, code: 'ETFC', name: 'E trade Financial' },
  { id: 14, code: 'NVDA', name: 'Nvidia Corp' },
  { id: 15, code: 'ZTO', name: 'Zto Express Ads Cl A' },
  { id: 16, code: 'LGND', name: 'Ligand Pharma' },
  { id: 17, code: 'VNOM', name: 'Viper Energy Prtnrs' },
  { id: 18, code: 'HQY', name: 'HealthEquity Inc' },
  { id: 19, code: 'MOMO', name: 'Momo Inc Ads Cl A' },
  { id: 20, code: 'GOOS', name: 'Canada Goose' },
  { id: 21, code: 'KEM', name: 'Kemet Corp' },
  { id: 22, code: 'PANW', name: 'Palo Alto Networks' },
  { id: 23, code: 'NOW', name: 'ServiceNow Inc' },
  { id: 24, code: 'ZBRA', name: 'Zebra Tech Corp Cl A' },
  { id: 25, code: 'ADBE', name: 'Adobe Systems' },
  { id: 26, code: 'RHT', name: 'Red Hat Inc' },
  { id: 27, code: 'LULU', name: 'Lululemon Athletica' },
  { id: 28, code: 'ANET', name: 'Arista Networks' },
  { id: 29, code: 'SUPN', name: 'SuperNus Pharma' },
  { id: 30, code: 'PAYC', name: 'Paycom Software Inc' },
  { id: 31, code: 'ILMN', name: 'Illumina' },
  { id: 32, code: 'CPRT', name: 'Copart Inc' },
  { id: 33, code: 'ODFL', name: 'Old Dominon Fghtlne' },
  { id: 34, code: 'MA', name: 'Mastercard Inc' },
  { id: 35, code: 'TEAM', name: 'Atlassian' },
  { id: 36, code: 'NOAH', name: 'Noah Holdings Ltd' },
  { id: 37, code: 'MU', name: 'Micron Tech' },
  { id: 38, code: 'FND', name: 'Floor&Decor Hldgs' },
  { id: 39, code: 'ENTG', name: 'Entegris Inc' },
  { id: 40, code: 'PGTI', name: 'PGT Innovations Inc' },
  { id: 41, code: 'IPGP', name: 'IPG Photonics Corp' },
  { id: 42, code: 'PLNT', name: 'Planet Fitness Inc' },
  { id: 43, code: 'IBKR', name: 'Interactive Brokers' },
  { id: 44, code: 'TRU', name: 'Transunion' },
  { id: 45, code: 'BOFI', name: 'BOFI Holding Inc' },
  { id: 46, code: 'GMED', name: 'Globus Medical Cl A' },
  { id: 47, code: 'BABA', name: 'Alibaba Group' },
  { id: 48, code: 'IDTI', name: 'Intgrtd Devices' },
  { id: 49, code: 'MTCH', name: 'Match Group Inc' },
  { id: 50, code: 'HCC', name: 'Worrior Met Coal Inc' }
];


/**
 * Data source for the MymatTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MymatTableDataSource extends DataSource<MymatTableItem> {
  data: MymatTableItem[] = EXAMPLE1_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MymatTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MymatTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MymatTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
