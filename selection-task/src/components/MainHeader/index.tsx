import { Layout, Menu } from 'antd';
const { Header } = Layout;
import { Link } from 'react-router-dom';

const navItem = [
  {
    label: <Link to="/">로그인</Link>,
    key: 1,
  },
  { label: <Link to="/sign-up">회원가입</Link>, key: 2 },
  { label: <Link to="/todo-list">투두리스트</Link>, key: 3 },
];
const MainHeader = () => {
  const onClickNavItem = ({ item, key, keyPath, domEvent }: any) => {
    console.log(key);
  };
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} onClick={onClickNavItem} items={navItem} />
    </Header>
  );
};

export default MainHeader;
