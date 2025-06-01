import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'
const Mainlayout = () => {
  return (
   <>
   <NavBar />
   <Outlet />
    <Footer />
   </>
  )
}

export default Mainlayout;