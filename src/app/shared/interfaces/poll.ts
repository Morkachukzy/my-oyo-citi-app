import {IAnswer} from './answer';

export interface IPoll {
    question: string;
    result: {
        positive: IAnswer;
        negative: IAnswer;
    };
}