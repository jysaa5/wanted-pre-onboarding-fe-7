import LoginForm from 'src/components/LoginForm';
import DefaultLayout from 'src/layouts';
import styles from './style.module.scss';

const SignIn = ({ successLogin }: { successLogin: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <>
      <DefaultLayout>
        <div className={styles['container-form']}>
          <div className={styles['item-form']}>
            <LoginForm successLogin={successLogin} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default SignIn;
