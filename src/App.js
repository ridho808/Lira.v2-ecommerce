import React, { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home} from './pages/index.jsx'
import {Helmet} from "react-helmet";
import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
      <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>LIRA</title>
          <meta name='description' content='Portfolio E-commerce with ReactJS'/>
        </Helmet>
      <BrowserRouter>
          <Routes>
            <Route path='*' element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      </>
  );
}

export default App;
