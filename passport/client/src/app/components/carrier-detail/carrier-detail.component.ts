import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-carrier-detail',
  templateUrl: './carrier-detail.component.html',
  //styleUrls: ['./carrier-detail.component.scss']
})
 
export class CarrierDetailComponent implements OnInit {
 
  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.crudService.GetCarrier(this.getId).subscribe(res => {
      this.updateForm.setValue({
        carriername: res['carriername'],
        description: res['description'],
        trucknumber: res['trucknumber'],
        status: res['status']
      });
    });
 
    this.updateForm = this.formBuilder.group({
      carriername: [''],
      description: [''],
      trucknumber: [''],
      status: ['']
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.crudService.updateCarrier(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/carriers-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}