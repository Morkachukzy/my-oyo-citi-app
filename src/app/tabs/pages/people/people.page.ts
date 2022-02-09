import {Component, OnInit} from '@angular/core';
import {ICase} from '../../../shared/interfaces/case';


@Component({
    selector: 'app-people',
    templateUrl: './people.page.html',
    styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
    cases: Array<ICase> = [
        {
            details: {
                id: 1,
                image: ``,
                title: `This shouldn't be the state of the just repaired stadium`,
                // eslint-disable-next-line max-len
                body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
                author: `Adewale Joseph`,
                location: `Ibadan, Ibadan, Ibadan South-East LGA`,
                department: `Ministry of Energy`,
                type: `Infrastructure`,
                feedback: {
                    views: 27,
                    likes: 0,
                    comments: 3
                },
                timeCreated: `12-09-2021`
            },
            status: `ACKNOWLEDGED`,
        },
        {
            details: {
                id: 2,
                image: ``,
                title: `This shouldn't be the state of the just repaired stadium`,
                // eslint-disable-next-line max-len
                body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
                author: `Adewale Joseph`,
                location: `Ibadan, Ibadan, Ibadan South-East LGA`,
                department: `Ministry of Energy`,
                type: `Infrastructure`,
                feedback: {
                    views: 27,
                    likes: 0,
                    comments: 3
                },
                timeCreated: `12-09-2021`
            },
            status: `ACKNOWLEDGED`,
        },
        {
            details: {
                id: 3,
                image: ``,
                title: `This shouldn't be the state of the just repaired stadium`,
                // eslint-disable-next-line max-len
                body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
                author: `Adewale Joseph`,
                location: `Ibadan, Ibadan, Ibadan South-East LGA`,
                department: `Ministry of Energy`,
                type: `Infrastructure`,
                feedback: {
                    views: 27,
                    likes: 0,
                    comments: 3
                },
                timeCreated: `12-09-2021`
            },
            status: `ACKNOWLEDGED`,
        },
        {
            details: {
                id: 4,
                image: ``,
                title: `This shouldn't be the state of the just repaired stadium`,
                // eslint-disable-next-line max-len
                body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
                author: `Adewale Joseph`,
                location: `Ibadan, Ibadan, Ibadan South-East LGA`,
                department: `Ministry of Energy`,
                type: `Infrastructure`,
                feedback: {
                    views: 27,
                    likes: 0,
                    comments: 3
                },
                timeCreated: `12-09-2021`
            },
            status: `ACKNOWLEDGED`,
        },
        {
            details: {
                id: 5,
                image: ``,
                title: `This shouldn't be the state of the just repaired stadium`,
                // eslint-disable-next-line max-len
                body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
                author: `Adewale Joseph`,
                location: `Ibadan, Ibadan, Ibadan South-East LGA`,
                department: `Ministry of Energy`,
                type: `Infrastructure`,
                feedback: {
                    views: 27,
                    likes: 0,
                    comments: 3
                },
                timeCreated: `12-09-2021`
            },
            status: `ACKNOWLEDGED`,
        },
        {
            details: {
                id: 6,
                image: ``,
                title: `This shouldn't be the state of the just repaired stadium`,
                // eslint-disable-next-line max-len
                body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
                author: `Adewale Joseph`,
                location: `Ibadan, Ibadan, Ibadan South-East LGA`,
                department: `Ministry of Energy`,
                type: `Infrastructure`,
                feedback: {
                    views: 27,
                    likes: 0,
                    comments: 3
                },
                timeCreated: `12-09-2021`
            },
            status: `ACKNOWLEDGED`,
        },
        {
            details: {
                id: 7,
                image: ``,
                title: `This shouldn't be the state of the just repaired stadium`,
                // eslint-disable-next-line max-len
                body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
                author: `Adewale Joseph`,
                location: `Ibadan, Ibadan, Ibadan South-East LGA`,
                department: `Ministry of Energy`,
                type: `Infrastructure`,
                feedback: {
                    views: 27,
                    likes: 0,
                    comments: 3
                },
                timeCreated: `12-09-2021`
            },
            status: `ACKNOWLEDGED`,
        },
        {
            details: {
                id: 8,
                image: ``,
                title: `This shouldn't be the state of the just repaired stadium`,
                // eslint-disable-next-line max-len
                body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
                author: `Adewale Joseph`,
                location: `Ibadan, Ibadan, Ibadan South-East LGA`,
                department: `Ministry of Energy`,
                type: `Infrastructure`,
                feedback: {
                    views: 27,
                    likes: 0,
                    comments: 3
                },
                timeCreated: `12-09-2021`
            },
            status: `ACKNOWLEDGED`,
        },
        {
            details: {
                id: 9,
                image: ``,
                title: `This shouldn't be the state of the just repaired stadium`,
                // eslint-disable-next-line max-len
                body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
                author: `Adewale Joseph`,
                location: `Ibadan, Ibadan, Ibadan South-East LGA`,
                department: `Ministry of Energy`,
                type: `Infrastructure`,
                feedback: {
                    views: 27,
                    likes: 0,
                    comments: 3
                },
                timeCreated: `12-09-2021`
            },
            status: `ACKNOWLEDGED`,
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}