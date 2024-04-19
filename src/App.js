import About from "./components/About";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Signup from "./components/Signup";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginNum from "./components/Loginnum";
import Login from "./components/Login";
import Layout from "./shared/Layout";
import Galle from "./components/Galle";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/hero" element={<Layout> <Hero/><About/>
      </Layout>}/>
      <Route path="/work" element={<Layout> <Work/> </Layout>}/>
      <Route path="/galle" element={<Layout> <Galle/> </Layout>}/>
      <Route path="/skills" element={<Layout> <Skills/> </Layout>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/loginnum" element={<LoginNum/>} />
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
