export interface Todo {
  todo: string;
}

export interface UpdateRequestTodo extends Todo {
  id: number;
  isCompleted: boolean;
}

export interface TodoInfo extends UpdateRequestTodo {
  userId: number;
}
