import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
 const angularMaterial=[
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatIconModule,MatProgressSpinnerModule,
  MatProgressBarModule,
  MatButtonModule
 ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,angularMaterial,
    
  ],

  exports:[angularMaterial]
})
export class AngularMaterialModule { }
