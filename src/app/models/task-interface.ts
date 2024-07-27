export interface TaskInterface {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export const tasks: TaskInterface[] = [
  { id: 1, todo: 'Do toDo app', completed: false, userId: 1 },
  { id: 2, todo: '30 min of cry', completed: true, userId: 1 },
  { id: 3, todo: 'Do something else', completed: false, userId: 1 },
];
