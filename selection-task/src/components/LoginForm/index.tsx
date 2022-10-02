import { Button, Form, Input } from 'antd';

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item label="이메일" name="username" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          제출
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
