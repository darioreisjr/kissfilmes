import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import Filme from './pages/Filme'
import Atores  from "./pages/Atores"
import './App.css'

 function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path='/atores' element={<Atores/>} />
      </Routes>
    </Router>
  )
}

export default App