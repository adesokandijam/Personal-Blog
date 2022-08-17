import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { RequireAuth } from "./RequireAuth";
import Blog from "./pages/blog/Blog";
import Navbar from "./components/topbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";



function App() {

  return (
    <Authenticator.Provider>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/blog" element={<Blog/>}/>
      <Route exact path="/login" element={ <Login/>}/>
      <Route exact path="/contact" element={ <Contact/>}/>
      <Route exact path="/write" element={<RequireAuth>
      <Write/>
      </RequireAuth>
      }/>
      <Route exact path="/post/:postId" element={<Single/>}/>
    </Routes>
    <Footer/>
    </Router>
    </Authenticator.Provider>
  );
}

export default App;
  