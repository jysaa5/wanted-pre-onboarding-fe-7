import { useEffect, useState, useRef } from 'react';
import { Button, List, Input, Switch } from 'antd';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../utils/api/Todo';
import { TodoInfo } from '../../utils/types/TodoInfo';
import styles from './style.module.scss';
const { Search } = Input;
const Todo = ({ accessToken }: { accessToken: string }) => {
  console.log('투두리스트 랜더링');
  const [todoList, setTodoList] = useState<Array<TodoInfo>>([]);
  const [editTodoId, setEditTodoId] = useState(-1);
  const editTodoIsCompleted = useRef(false);
  const editTodo = useRef('');
  const getUserTodoList = async () => {
    const response = await getTodos(accessToken);
    console.log(response);
    setTodoList(response);
  };
  const onSearch = async (value: string) => {
    console.log(value);
    const response = await createTodo(value, accessToken);
    console.log(response);
    const temp = todoList;
    temp.push(response);
    setTodoList(temp);
    getUserTodoList();
  };

  const onChange = (checked: boolean) => {
    editTodoIsCompleted.current = checked;
  };

  const submitUpdatedTodo = async () => {
    const response = await updateTodo({ id: editTodoId, todo: editTodo.current, isCompleted: editTodoIsCompleted.current });
    console.log(response);
    // const temp = todoList;
    // temp.push(response);
    // setTodoList(temp);
    setEditTodoId(-1);
    getUserTodoList();
  };

  const onChangeTodo = (e: any) => {
    console.log(e);
    editTodo.current = e.target.value;
  };

  useEffect(() => {
    console.log('Todo List');
    if (accessToken.length > 0) {
      getUserTodoList();
    }
  }, [accessToken]);
  return (
    <>
      <div>
        <div className={styles['list-title']}>TODO LIST</div>
        <Search placeholder="TODO" enterButton="추가" size="large" onSearch={onSearch} />
        <List
          bordered
          itemLayout="horizontal"
          dataSource={todoList}
          renderItem={(item: TodoInfo) => (
            <List.Item
              actions={[
                <Button
                  style={item.id === editTodoId ? { display: 'none' } : {}}
                  key={item.id}
                  onClick={() => {
                    setEditTodoId(item.id);
                    editTodoIsCompleted.current = item.isCompleted;
                    editTodo.current = item.todo;
                  }}
                >
                  수정
                </Button>,
                <Button
                  style={item.id === editTodoId ? { display: 'none' } : {}}
                  key={item.id}
                  onClick={async () => {
                    const response = await deleteTodo(String(item.id));
                    console.log(response);
                    getUserTodoList();
                  }}
                >
                  삭제
                </Button>,
              ]}
            >
              {item.id !== editTodoId ? (
                <>
                  {item.isCompleted === false ? <div className={styles['list-isCompleted']}>미완료</div> : <div className={styles['list-isCompleted']}>완료</div>}
                  <div>{item.todo}</div>
                </>
              ) : (
                <>
                  <Switch className={styles['switch-isCompleted']} checkedChildren="완료" unCheckedChildren="미완료" defaultChecked={item.isCompleted} onChange={onChange} />
                  <Input defaultValue={item.todo} onChange={onChangeTodo}></Input>
                  <Button onClick={submitUpdatedTodo}>제출</Button>
                  <Button
                    onClick={() => {
                      setEditTodoId(-1);
                    }}
                  >
                    취소
                  </Button>
                </>
              )}
            </List.Item>
          )}
        ></List>
      </div>
    </>
  );
};

export default Todo;
