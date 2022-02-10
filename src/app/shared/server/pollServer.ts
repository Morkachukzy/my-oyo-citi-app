import {IPoll} from '../interfaces/poll';
const poll: IPoll = {
    question: `Do you think Gov. Makinde is handling the current security  ell situation in Oyo state?
    If no, what do you advise?`,
    result: {
        positive: {
            remark: 'Yes, he is trying his best',
            count: 290
        },
        negative: {
            remark: 'No, he is not doing well',
            count: 370
        }
    }
};

export default poll;