import {IFeedback} from './feedback';

export interface IPost {
    id: number;
    image: string;
    title: string;
    body: string;
    author: string;
    location: string;
    department: string;
    type: string;
    feedback: IFeedback;
    timeCreated: string;
}