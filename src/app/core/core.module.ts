import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class CoreModule {
  constructor(public matIconRegistry: MatIconRegistry) {}
 }
