import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodicElement } from '../model/PeriodicElement';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  @Input() itemlist:PeriodicElement[]=[];
  public isLoading:boolean=true;
  @Input() titleheader!:string;
  dataSource = new MatTableDataSource<PeriodicElement>();
  name: any;
  constructor(private _liveAnnouncer: LiveAnnouncer,private activatedRoute: ActivatedRoute,private router:Router) { }
  @ViewChild(MatPaginator,{static:true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    // this.activatedRoute();
    this.dataSource = new MatTableDataSource<PeriodicElement>((this.itemlist));
    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort
    //  position:any=this.dataSource.data.map(x=>x.position)
    console.log("item list:",this.dataSource.data.map(x=>x.position));
  }

  navigateTo(event:any){
    this.router.navigate(["/detail","dataSource.position"]);
    // [routerLink]="['/detail','element.position']ks
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
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
