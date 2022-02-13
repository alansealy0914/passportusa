import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";

import {InvoiceComponent} from './invoice/invoice.component';
import {PrintLayoutComponent} from './print-layout/print-layout.component';
import { CreateOrderComponent } from './create-order/create-order.component';

import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { ProductsComponent } from './products/products.component';

import { CarriersListComponent } from './components/carriers-list/carriers-list.component';
import { AddCarrierComponent } from './components/add-carrier/add-carrier.component';
import { CarrierDetailComponent } from './components/carrier-detail/carrier-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "order-history", component: OrderHistoryComponent, canActivate: [AuthGuard] },
  { path: "product-order", component: ProductOrderComponent, canActivate: [AuthGuard] },
  
  { path: 'carriers-list', component: CarriersListComponent, canActivate: [AuthGuard] },
  { path: 'add-carrier', component: AddCarrierComponent, canActivate: [AuthGuard]  },
  { path: 'edit-carrier/:id', component: CarrierDetailComponent, canActivate: [AuthGuard]  },
  
  
  { path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent }
    ]
  },
  
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
