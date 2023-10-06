
import UserIndex from './Components/Landing/Index';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Text from './Components/Auth/Text';
import LoginOption from './Components/Auth/LoginOption';
import NotFound from './Components/Error/404';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from './Components/Test';
import BloggerIndex from './Components/blogers/dashboard/Index';
import './App.css';
import Main from './Components/admin/index/Index';
import routes from './Components/admin/Route';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<UserIndex />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='login-with' element={<LoginOption />} />
        <Route path='test' element={<Test />} />
        {/* Blogger */}
        <Route path='/blg' element={<BloggerIndex />} />
        {/* <Route path='/admin/' element={<Admin />} /> */}
        <Route path='/main' element={<Main />}>
          {routes.map(
            (i =>
              <Route path={i.path} element={i.elt} />
            )
          )}
           <Route path="test" element="Test" />
        </Route>
        {/* End Blogger */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
