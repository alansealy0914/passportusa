import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-add-carrier',
  templateUrl: './add-carrier.component.html',
  //styleUrls: ['./add-carrier.component.scss']
})
 
export class AddCarrierComponent implements OnInit {
 
  carrierForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.carrierForm = this.formBuilder.group({
      carriername: [''],
      description: [''],
      trucknumber: [''],
      status: [''],
    })
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.crudService.AddCarrier(this.carrierForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/carriers-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}