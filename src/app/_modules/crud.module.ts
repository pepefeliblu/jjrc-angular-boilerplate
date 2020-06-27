import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AllDummyComponent, CreateDummyComponent, EditDummyComponent, ShowDummyComponent } from '../_components/dummy';

@NgModule({
  imports: [
  	CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
  	AllDummyComponent,
    CreateDummyComponent,
    EditDummyComponent,
    ShowDummyComponent
  ]
})
export class CrudModule { }
