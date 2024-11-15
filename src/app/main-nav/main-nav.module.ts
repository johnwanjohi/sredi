import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';


@NgModule({
  declarations: [MainNavComponent],
  imports: [CommonModule,FormsModule, RouterModule, MaterialModule, FormsModule],
  exports: [MainNavComponent],
})
export class MainNavModule {}
