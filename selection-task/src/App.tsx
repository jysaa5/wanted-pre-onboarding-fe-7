import './styles/Antd.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoList from './pages/TodoList';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MainHeader from '../src/components/MainHeader';
import MainFooter from '../src/components/MainFooter';
import { Layout } from 'antd';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <MainHeader />
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/todo-list" element={<TodoList />}></Route>
          </Routes>
          <MainFooter />
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
