import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import Filme from './pages/Filme'
import './App.css'
import { SearchBar } from "./components/searchBar/searchBar";

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
      </Routes>
    </Router>
  )
}