import { Layout, Menu } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
const { Header } = Layout;
import { Link } from 'react-router-dom';

const defaultNavItem: Array<{ label: ReactNode | string; key: number }> = [
  {
    label: <Link to="/">로그인</Link>,
    key: 1,
  },
  { label: <Link to="/sign-up">회원가입</Link>, key: 2 },
];
const MainHeader = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') === null ? '' : (localStorage.getItem('access_token') as string));
  const [navItems, setNavItems] = useState(defaultNavItem);
  useEffect(() => {
    console.log('하이?');
    console.log(localStorage.getItem('access_token'));
    if (localStorage.getItem('access_token') !== null) {
      setAccessToken(localStorage.getItem('access_token') === null ? '' : (localStorage.getItem('access_token') as string));
      setNavItems(getNavItems());
    }
  }, [localStorage.getItem('access_token')]);
  const onClickNavItem = ({ item, key, keyPath, domEvent }: any) => {
    console.log(key);
  };
  const getNavItems = () => {
    if (accessToken.length > 0) {
      return [
        {
          label: <Link to="/todo-list">투두리스트</Link>,
          key: 1,
        },
        { label: '로그아웃', key: 2 },
      ];
    } else {
      return defaultNavItem;
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
