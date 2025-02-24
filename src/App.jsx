import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories'
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/categories' element={<Categories />} />
        </Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
