import {IAllocationStatistic} from '../interfaces/allocationStatistic';

const allocationStats: Array<IAllocationStatistic> = [
    {
        title: 'Oyo State February 2021 Allocation',
        amount: 5335217301.15,
        link: {
            name: `See All Federal Allocation`,
            path: `/federal-allocation` //TODO: Set links up
        }
    },
    {
        title: 'Afijio LGA February 2021 Allocation',
        amount: 145657337.75,
        link: {
            name: 'See All Local Govt. Allocation',
            path: 'local-government-allocation'
        }
    },
];

export default allocationStats;