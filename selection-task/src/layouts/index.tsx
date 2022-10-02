import './style.module.scss';
import { Layout } from 'antd';
import MainHeader from 'src/components/MainHeader';
import { ReactNode } from 'react';
import MainFooter from 'src/components/MainFooter';
const { Content } = Layout;

interface MainContent {
  children: ReactNode;
}

const DefaultLayout = ({ children }: MainContent) => {
  return (
    <Layout>
      <MainHeader />
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, height: '86vh' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <MainFooter />
    </Layout>
  );
};

export default DefaultLayout;
