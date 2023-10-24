
import UserIndex from './Components/Landing/Index';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
// import Text from './Components/Auth/Text';
import LoginOption from './Components/Auth/LoginOption';
import NotFound from './Components/Error/404';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from './Components/Test';
import BloggerIndex from './Components/blogers/dashboard/Index';
import './App.css';
import Main from './Components/admin/index/Index';
import routes from './Components/admin/Route';
import blg_routes from './Components/blogers/routes/index';

import Home from './pages/blogs/Home';
import BlogDetail from './pages/blogs/BlogDetail';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<UserIndex />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='login-with' element={<LoginOption />} />
        {/* USER */}
        <Route path="/us/blogs" element={<Home />}></Route>
        <Route path="/us/blogs/blog-detail/:id" element={<BlogDetail />}></Route>


        {/* TEST */}
        <Route path='test' element={<Test />} />


        {/* Blogger */}
        <Route path='/blg' element={<BloggerIndex />} >
          {blg_routes.map(
            (i =>
              <Route path={i.path} element={i.elt} />
            )
          )}

        </Route>
        {/* End Blogger */}

        {/* ADMIN */}
        {/* <Route path='/admin/' element={<Admin />} /> */}
        <Route path='/main' element={<Main />}>
          {routes.map(
            (i =>
              <Route path={i.path} element={i.elt} />
            )
          )}
          <Route path="test" element="Test" />
        </Route>
        {/* End Admin */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
