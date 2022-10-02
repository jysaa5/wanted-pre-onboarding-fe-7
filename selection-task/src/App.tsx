import './styles/Antd.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoList from './TodoList';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">로그인</Link>
          <Link to="/todo-list">투두리스트</Link>
        </nav>
        <Routes>
          <Route path="/"></Route>
          <Route path="/todo-list" element={<TodoList />}></Route>
        </Routes>
        <LoginForm />
      </BrowserRouter>
    </>
  );
};

export default App;
