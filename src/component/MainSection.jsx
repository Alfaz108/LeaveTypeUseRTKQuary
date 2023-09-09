import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainSection = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainSection