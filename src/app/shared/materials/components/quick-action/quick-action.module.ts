import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { QuickActionComponent } from './quick-action.component';

@NgModule({
  declarations: [QuickActionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    QuickActionComponent
  ]
})
export class QuickActionModule { }
