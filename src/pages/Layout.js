import { Outlet } from "react-router";
import Theme from '../utils/Theme';

export default function Layout () {
  return (
    <div className="min-h-screen" onLoad={ Theme }>
      
      <Outlet />
    </div>
  )
}