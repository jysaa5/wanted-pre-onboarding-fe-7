import LoginForm from 'src/components/LoginForm';
import DefaultLayout from 'src/layouts';
import styles from './style.module.scss';

const SignIn = () => {
  return (
    <>
      <DefaultLayout>
        <div className={styles['container-form']}>
          <div className={styles['item-form']}>
            <LoginForm />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default SignIn;
