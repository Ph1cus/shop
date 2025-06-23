import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/mainLayout'
import HomePage from './pages/homePage'
import CatalogPage from './pages/catalogPage'
import AboutPage from './pages/aboutusPage'
import ProductPage from './components/ProductPage'


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}
export default App
