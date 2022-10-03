import RegisterForm from 'src/components/RegisterForm';
import DefaultLayout from 'src/layouts';
import styles from './style.module.scss';
const SignUp = ({ successRegister }: { successRegister: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div>
      <DefaultLayout>
        <div className={styles['container-form']}>
          <div className={styles['item-form']}>
            <RegisterForm successRegister={successRegister} />
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default SignUp;
