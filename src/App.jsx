import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories'
import Statistics from './pages/Statistics';
import Settings from './pages/Settings'
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
