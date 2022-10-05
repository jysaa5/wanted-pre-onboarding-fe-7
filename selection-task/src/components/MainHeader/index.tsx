import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
const { Header } = Layout;
import { Link, useLocation } from 'react-router-dom';

const MainHeader = ({ accessToken }: { accessToken: string }) => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = accessToken.length > 0 ? useState(['todo-1']) : location.pathname === '/sign-up' ? useState(['sign-up-1']) : useState(['login-1']);
  useEffect(() => {
    if (accessToken.length > 0) {
      setSelectedKeys(['todo-1']);
    } else {
      location.pathname === '/sign-up' ? setSelectedKeys(['sign-up-1']) : setSelectedKeys(['login-1']);
    }
  }, [accessToken]);

  const onClickNavItem = ({ key }: { key: string }) => {
    setSelectedKeys([key]);
    if (key === 'logout') {
      localStorage.removeItem('access_token');
      window.location.href = '/';
    }
  };

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selectedKeys}
        onClick={onClickNavItem}
        items={
          accessToken.length > 0
            ? [
                {
                  label: <Link to="/todo">투두 리스트</Link>,
                  key: 'todo-1',
                },
                { label: '로그아웃', key: 'logout' },
              ]
            : [
                {
                  label: <Link to="/">로그인</Link>,
                  key: 'login-1',
                },
                { label: <Link to="/sign-up">회원가입</Link>, key: 'sign-up-1' },
              ]
        }
      />
    </Header>
  );
};

export default MainHeader;
