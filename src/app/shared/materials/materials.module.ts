import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwiperModule} from 'swiper/angular';
import {SearchBarModule} from './components/search-bar/search-bar.module';
import {QuickActionModule} from './components/quick-action/quick-action.module';
import {ImageSliderModule} from './components/image-slider/image-slider.module';
import {StatisticsCardModule} from './components/statistics-card/statistics-card.module';
import {ParticipationPollModule} from './components/participation-poll/participation-poll.module';
import {RecentIssuesModule} from './components/recent-issues/recent-issues.module';
import { TriviaModule } from './components/trivia/trivia.module';
import {CaseModule} from './components/case/case.module';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SwiperModule,
        SearchBarModule,
        QuickActionModule,
        ImageSliderModule,
        StatisticsCardModule,
        ParticipationPollModule,
        RecentIssuesModule,
        TriviaModule,
        CaseModule,
        ScrollingModule
    ],
    exports: [
        SwiperModule,
        SearchBarModule,
        QuickActionModule,
        ImageSliderModule,
        StatisticsCardModule,
        ParticipationPollModule,
        RecentIssuesModule,
        TriviaModule,
        CaseModule,
        ScrollingModule
    ]
})
export class MaterialsModule {
}