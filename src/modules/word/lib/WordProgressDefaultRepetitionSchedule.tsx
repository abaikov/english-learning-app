import { IWordRepetitionStage } from '../type/IWordRepetitionStage';

const minute = 1000 * 60;
const hour = 1000 * 60 * 60;
const day = hour * 24;
const week = day * 7;
const month = day * 30;

export const WordProgressDefaultRepetitionSchedule: IWordRepetitionStage[] = [
    {
        interval: 0,
        hintEnabled: false,
        description: 'Started to learn',
    },
    {
        interval: 15 * minute,
        hintEnabled: true,
        description: 'Almost unknown',
    },
    {
        interval: 1 * hour,
        hintEnabled: false,
        description: 'Almost unknown',
    },
    {
        interval: 4 * hour,
        hintEnabled: true,
        description: 'Just starting to memorize',
    },
    {
        interval: day,
        hintEnabled: false,
        description: 'Just starting to memorize',
    },
    {
        interval: 3 * day,
        hintEnabled: false,
        description: 'А little familiar',
    },
    {
        interval: week,
        hintEnabled: true,
        description: 'Poorly memorized',
    },
    {
        interval: 2 * week,
        hintEnabled: false,
        description: 'Probably memorized',
    },
    {
        interval: month,
        hintEnabled: true,
        description: 'Likely memorized',
    },
]
