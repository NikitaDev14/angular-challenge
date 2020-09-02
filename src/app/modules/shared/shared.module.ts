import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetPipe } from './pipes/get.pipe';

@NgModule({
  declarations: [
    GetPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetPipe,
  ]
})
export class SharedModule { }
