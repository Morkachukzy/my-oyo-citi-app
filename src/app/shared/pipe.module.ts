import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nl2brPipe } from '../pipes/nl2br.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CountdownPipe } from '../pipes/countdown.pipe';



@NgModule({
  declarations: [
    Nl2brPipe, CountdownPipe
  ],
  imports: [
    CommonModule, HttpClientModule,
  ],
  exports: [
    Nl2brPipe, HttpClientModule, CountdownPipe,
  ]
})
export class PipeModule { }
