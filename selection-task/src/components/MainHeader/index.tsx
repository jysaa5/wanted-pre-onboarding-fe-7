import { Layout, Menu } from 'antd';
const { Header } = Layout;

const navItem = [
  {
    label: '로그인',
    key: 1,
  },
  { label: '회원가입', key: 2 },
  { label: '투두리스트', key: 3 },
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
