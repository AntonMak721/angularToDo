import { TaskInterface } from './task-interface';

export type NewTaskInterface = Omit<TaskInterface, 'id'>;
