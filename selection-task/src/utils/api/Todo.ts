import commonAxios from '../../lib/client/commonAxios';
import { Todo, UpdateRequestTodo } from '../types/TodoInfo';

const createTodo = async (todo: string, accessToken: string) => {
  try {
    const response = await commonAxios.post(
      '/todos',
      {
        todo: todo,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
  return {};
};

const getTodos = async (accessToken: string) => {
  try {
    const response = await commonAxios.get('/todos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
  return {};
};

const updateTodo = async (params: UpdateRequestTodo) => {
  try {
    const response = await commonAxios.put(`/todos/${params.id}`, {
      todo: params.todo,
      isCompleted: params.isCompleted,
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
  return {};
};

const deleteTodo = async (id: string) => {
  try {
    const response = await commonAxios.delete(`/todos/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
  return 'FAIL';
};

export { createTodo, getTodos, updateTodo, deleteTodo };
