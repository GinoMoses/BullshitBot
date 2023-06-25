import { Event } from '../types';
import ready from './ready';
import interactionCreate from './interactionCreate';
import weekday from './weekday';

const events: Event<any>[] = [
    ready,
    interactionCreate,
    weekday
]

export default events;