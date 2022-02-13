import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
 
@Component({
  selector: 'app-carriers-list',
  templateUrl: './carriers-list.component.html',
  //styleUrls: ['./carriers-list.component.scss']
})
 
export class CarriersListComponent implements OnInit {
   
  Carriers:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetCarriers().subscribe(res => {
      console.log(res)
      this.Carriers =res;
    });    
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteCarrier(id).subscribe((res) => {
        this.Carriers.splice(i, 1);
      })
    }
  }
 
}