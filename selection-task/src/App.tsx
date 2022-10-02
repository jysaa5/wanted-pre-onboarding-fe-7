import './styles/Antd.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoList from './pages/TodoList';
import SignUp from './pages/SignUp/index';
import SignIn from './pages/SignIn/index';
import MainHeader from '../src/components/MainHeader';
import MainFooter from '../src/components/MainFooter';
import { Layout } from 'antd';
import { useEffect, useState } from 'react';

const App = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') === null ? '' : (localStorage.getItem('access_token') as string));
  useEffect(() => {
    console.log('랜더링');
    setAccessToken(localStorage.getItem('access_token') === null ? '' : (localStorage.getItem('access_token') as string));
    console.log(accessToken);
  }, [localStorage.getItem('access_token')]);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <MainHeader />
          <Routes>
            {accessToken.length <= 0 ? (
              <>
                <Route path="/" element={<SignIn />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
              </>
            ) : (
              <Route path="/todo-list" element={<TodoList />}></Route>
            )}
            {/* <Route path="/" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/todo-list" element={<TodoList />}></Route> */}
          </Routes>
          <MainFooter />
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
