import Todo from 'src/components/Todo';
import DefaultLayout from 'src/layouts';
import styles from './style.module.scss';
const TodoList = ({ accessToken }: { accessToken: string }) => {
  return (
    <div>
      <DefaultLayout>
        <div className={styles['container-form']}>
          <div className={styles['item-form']}>
            <Todo accessToken={accessToken} />
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default TodoList;
