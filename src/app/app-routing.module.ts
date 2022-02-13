import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdditemComponent } from './additem/additem.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

const routes: Routes = [
  // {path:'',component:ItemlistComponent,pathMatch:'full'},
  {path:'',redirectTo:'list', pathMatch: 'full' },
  {path:"list",component:ItemlistComponent},
  {path:'add',component:AdditemComponent},
  {path:'detail/:position',component:ItemdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
