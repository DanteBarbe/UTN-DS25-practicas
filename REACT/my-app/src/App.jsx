import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeApp from './Apps/HomeApp'
import TerrorApp from './Apps/TerrorApp'
import WWIIApp from './Apps/WWIIApp';


  function App() {
    return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/terror" element={<TerrorApp />} />
        <Route path="/wwII" element={<WWIIApp />} />
        <Route path="/literary" element={<LiteraryApp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
/*
<Route path="/science-fiction" element={<ScienceFiction />} />
<Route path="/wwII" element={<WWII />} />
<Route path="/contact" element={<Contact />} />
<Route path="/register" element={<Register />} />*/