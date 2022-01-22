import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Site1 from "./pages/Site1";
import Site2 from "./pages/Site2";
import Site3 from "./pages/Site3";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< Site1 />} />
          <Route path="Site2" element={< Site2 />} />
          <Route path="Site3" element={< Site3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;