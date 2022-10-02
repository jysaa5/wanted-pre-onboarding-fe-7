import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessTokenBySignIn } from 'src/utils/api/Auth';
import { UserInfo } from 'src/utils/types/UserInfo';

const LoginForm = () => {
  const navigate = useNavigate();
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const onValuesChange = (changedValue: { username: string } | { password: string }, allValues: UserInfo) => {
    console.log(changedValue, allValues);
    validateInput(allValues);
  };

  const validateInput = (value: UserInfo) => {
    if (value.username !== undefined && value.password !== undefined && value.username.indexOf('@') > -1 && value.username.split('@').length === 2 && value.password.length > 7) {
      setDisabledSubmit(false);
    }
  };

  const onFinish = async (values: UserInfo) => {
    console.log('Success:', values);
    const response = await getAccessTokenBySignIn(values);
    if (response?.access_token.length > 0) {
      localStorage.setItem('access_token', response?.access_token as string);
      console.log(response);
      navigate('/todo-list');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" onValuesChange={onValuesChange}>
      <Form.Item label="이메일" name="username" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" disabled={disabledSubmit}>
          제출
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
