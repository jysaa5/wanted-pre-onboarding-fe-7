import { Layout, Menu } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
const { Header } = Layout;
import { Link, useLocation, useNavigate } from 'react-router-dom';

const defaultNavItem: Array<{ label: ReactNode | string; key: string }> = [
  {
    label: <Link to="/">로그인</Link>,
    key: '1',
  },
  { label: <Link to="/sign-up">회원가입</Link>, key: '2' },
];

const MainHeader = ({ successLogin }: { successLogin: string }) => {
  const naviagte = useNavigate();
  const getNavItems = () => {
    if (successLogin.length > 0) {
      return [
        {
          label: <Link to="/todo">투두 리스트</Link>,
          key: '1',
        },
        { label: '로그아웃', key: 'logout' },
      ];
    } else {
      return defaultNavItem;
    }
  };
  const [navItems, setNavItems] = useState(getNavItems());

  console.log('MainHeader1');

  useEffect(() => {
    console.log('MainHeader2');
    console.log(successLogin);
    setNavItems(getNavItems());
    console.log('navItems >>>>', navItems);
  }, [successLogin, localStorage.getItem('access_token')]);

  const onClickNavItem = ({ key }: { key: string }) => {
    console.log(key);
    if (key === 'logout') {
      localStorage.removeItem('access_token');
      window.location.href = '/';
    }
  };

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} onClick={onClickNavItem} items={navItems} />
    </Header>
  );
};

export default MainHeader;
