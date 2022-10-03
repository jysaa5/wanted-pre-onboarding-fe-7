import { Button, Result } from 'antd';
import DefaultLayout from 'src/layouts';

const NotFoundPage = () => {
  return (
    <DefaultLayout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              localStorage.removeItem('access_token');
              window.location.href = '/';
            }}
          >
            Back Home
          </Button>
        }
      />
    </DefaultLayout>
  );
};
export default NotFoundPage;
