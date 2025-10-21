import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeApp from './Apps/HomeApp'
import TerrorApp from './Apps/TerrorApp'
import WWIIApp from './Apps/WWIIApp';
import LiteraryApp from './Apps/LiteraryApp';
import ScienceFictionApp from './Apps/ScienceFictionApp';
import ContactApp from './Apps/ContactApp';
import RegisterApp from './Apps/RegisterApp';
import Layout from './Components/Layout';
import Login from './Apps/Login';
import { AuthProvider } from './Contexts/AuthContext';
import { PrivateRoute } from './Components/PrivateRoute';


  function App() {
    return (
    <>
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<HomeApp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/terror" element={<TerrorApp />} />
                <Route path="/wwII" element={<WWIIApp />} />
                <Route path="/literary" element={<LiteraryApp />} />
                <Route path="/science-fiction" element={<ScienceFictionApp />} />
                <Route path="/contact" element={<ContactApp />} />
                <Route path="/register" element={<RegisterApp />} />

                <Route path='/contact' element={
                  <PrivateRoute>
                    <ContactApp />
                  </PrivateRoute>
                } />

                <Route path="/unauthorized" element={
                  <div>No tienes permisos para ver esta página</div>
                } />
              </Route>
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}
export default App