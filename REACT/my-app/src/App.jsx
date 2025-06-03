import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeApp from './Apps/HomeApp'
import TerrorApp from './Apps/TerrorApp'
import WWIIApp from './Apps/WWIIApp';
import LiteraryApp from './Apps/LiteraryApp';
import ScienceFictionApp from './Apps/ScienceFictionApp';


  function App() {
    return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/terror" element={<TerrorApp />} />
        <Route path="/wwII" element={<WWIIApp />} />
        <Route path="/literary" element={<LiteraryApp />} />
        <Route path="/science-fiction" element={<ScienceFictionApp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
/*
<Route path="/contact" element={<Contact />} />
<Route path="/register" element={<Register />} />*/