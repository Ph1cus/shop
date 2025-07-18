import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20 pb-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
