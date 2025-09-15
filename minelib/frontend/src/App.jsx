import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeApp from './Apps/HomeApp'
import TerrorApp from './Apps/TerrorApp'
import WWIIApp from './Apps/WWIIApp';
import LiteraryApp from './Apps/LiteraryApp';
import ScienceFictionApp from './Apps/ScienceFictionApp';
import ContactApp from './Apps/ContactApp';
import RegisterApp from './Apps/RegisterApp';
import Layout from './Components/Layout';
import Login from './Apps/login';


  function App() {
    return (
    <>
      <Router>
          <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomeApp />} />
          <Route path="/terror" element={<TerrorApp />} />
          <Route path="/wwII" element={<WWIIApp />} />
          <Route path="/literary" element={<LiteraryApp />} />
          <Route path="/science-fiction" element={<ScienceFictionApp />} />
          <Route path="/contact" element={<ContactApp />} />
          <Route path="/register" element={<RegisterApp />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}
export default App