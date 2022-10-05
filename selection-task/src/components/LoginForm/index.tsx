import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessTokenBySignIn } from 'src/utils/api/Auth';
import { UserInfo } from 'src/utils/types/UserInfo';
import styles from './style.module.scss';

const LoginForm = ({ successLogin }: { successLogin: React.Dispatch<React.SetStateAction<string>> }) => {
  const navigate = useNavigate();
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const onValuesChange = (changedValue: { username: string } | { password: string }, allValues: UserInfo) => {
    console.log(changedValue, allValues);
    validateInput(allValues);
  };

  const validateInput = (value: UserInfo) => {
    if (value.username !== undefined && value.password !== undefined && value.username.indexOf('@') > -1 && value.username.split('@').length === 2 && value.password.length > 7) {
      setDisabledSubmit(false);
    } else {
      setDisabledSubmit(true);
    }
  };

  const onFinish = async (values: UserInfo) => {
    console.log('Success:', values);
    const response = await getAccessTokenBySignIn(values);
    console.log('로그인 결과 >>>', response);
    if (response?.access_token?.length > 0) {
      localStorage.setItem('access_token', response?.access_token as string);
      console.log(response);
      successLogin(response?.access_token as string);
      navigate('/todo');
    } else {
      alert('아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
      navigate(0);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" onValuesChange={onValuesChange}>
      <div className={styles['title-login-form']}>ID 로그인</div>
      <Form.Item label="이메일" name="username" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" disabled={disabledSubmit} className={styles['button-login']}>
          로그인
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
