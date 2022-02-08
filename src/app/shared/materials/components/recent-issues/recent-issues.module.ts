import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RecentIssuesComponent} from './recent-issues.component';


@NgModule({
    declarations: [RecentIssuesComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
    exports: [RecentIssuesComponent]
})
export class RecentIssuesModule {
}