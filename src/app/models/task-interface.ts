export interface TaskInterface {
    id:number;
    todo: string;
    completed: boolean;
    userID:number;
}

export const tasks:TaskInterface[] = [
    {id:1,todo : 'Do toDo app', completed: false,userID:1},
    {id:2,todo: '30 min of cry', completed: true,userID:1},
    {id:3,todo: 'Do something else', completed: false,userID:1},
  ]