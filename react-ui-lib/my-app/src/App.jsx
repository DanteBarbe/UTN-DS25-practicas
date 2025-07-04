import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeApp from './Apps/HomeApp'
import TerrorApp from './Apps/TerrorApp'
import WWIIApp from './Apps/WWIIApp';
import LiteraryApp from './Apps/LiteraryApp';
import ScienceFictionApp from './Apps/ScienceFictionApp';
import ContactApp from './Apps/ContactApp';
import RegisterApp from './Apps/RegisterApp';
import Layout from './Components/Layout';


  function App() {
    return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeApp />} />
            <Route path="/terror" element={<TerrorApp />} />
            <Route path="/wwII" element={<WWIIApp />} />
            <Route path="/literary" element={<LiteraryApp />} />
            <Route path="/science-fiction" element={<ScienceFictionApp />} />
            <Route path="/contact" element={<ContactApp />} />
            <Route path="/register" element={<RegisterApp />} />*/
          </Routes>
        </Layout>
    </Router>
    </>
  )
}
export default App