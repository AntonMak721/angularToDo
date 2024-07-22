export interface TaskInterface {
    id:number;
    task: string;
    completed: boolean;
}

export const tasks:TaskInterface[] = [
    {id:1,task : 'Do toDo app', completed: false},
    {id:2,task : '30 min of cry', completed: true},
    {id:3,task : 'Do something else', completed: false},
  ]