import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import CheckOut from './components/CheckOut/CheckOut';
import Register from './components/Register/Register';
import Login from './components/Register/Login';
import RequireAuth from './components/Auth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
