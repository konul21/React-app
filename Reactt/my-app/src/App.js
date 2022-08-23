import { useState } from "react";
import Form from "./form";
import './style.css'
import {BrowserRouter  as Router, Routes, Route, NavLink} from 'react-router-dom'
import Home from "./Home";
import ProtectedRouter from "./protectedRouter";
import LoginForm from "./loginForm";
import Detail from "./detail";
import Appcss from "./CSS/App.css"
import Product from "./products"

function App() {
  const [resultToken, setresultToken] = useState('');
  function test(nese){
    setresultToken(nese)
  }
  return (
    
    <div className="App">
      <header>
        <nav>
          
     <Router>
      <ul>
        <li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>

          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>

        </li>
      </ul>
      <Routes>
      
       <Route element={<ProtectedRouter token={resultToken} ></ProtectedRouter>}>
       <Route path="/" element={<Home/>} />
       </Route>
       <Route path="/products" element={<Product/>} />
        <Route path="/register" element={<Form test={test}></Form>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      
      </Routes>
     </Router>
        </nav>
      </header>
    </div>
  );
}

export default App;
