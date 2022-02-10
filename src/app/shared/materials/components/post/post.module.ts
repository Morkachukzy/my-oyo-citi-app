import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {PostComponent} from './post.component';

@NgModule({
    declarations: [PostComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
    exports: [
        PostComponent
    ]
})
export class PostModule {
}