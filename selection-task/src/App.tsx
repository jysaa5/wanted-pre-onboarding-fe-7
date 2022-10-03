import './styles/Antd.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TodoList from './pages/TodoList';
import SignUp from './pages/SignUp/index';
import SignIn from './pages/SignIn/index';
import NotFound from './pages/404';
import MainHeader from '../src/components/MainHeader';
import MainFooter from '../src/components/MainFooter';
import { Layout } from 'antd';
import { useEffect, useState } from 'react';

const App = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') === null ? '' : (localStorage.getItem('access_token') as string));
  console.log('App');
  console.log('accessToken >>>>', accessToken);

  useEffect(() => {
    console.log('랜더링');
    console.log('accessToken >>>>', accessToken);
    setAccessToken(localStorage.getItem('access_token') === null ? '' : (localStorage.getItem('access_token') as string));
  }, [localStorage.getItem('access_token')]);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <MainHeader successLogin={accessToken} />
          <Routes>
            {accessToken.length <= 0 ? (
              <>
                <Route path="/" element={<SignIn successLogin={setAccessToken} />}></Route>
                <Route path="/sign-up" element={<SignUp successRegister={setAccessToken} />}></Route>
                <Route path="/todo" element={<Navigate replace to="/" />}></Route>
              </>
            ) : (
              <>
                <Route path="/todo" element={<TodoList />}></Route>
                <Route path="/" element={<Navigate replace to="/todo" />} />
              </>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MainFooter />
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
