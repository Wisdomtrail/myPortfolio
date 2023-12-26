import { Outlet } from 'react-router-dom';
import SideBar from '../sideBar';
import './index.scss';

const Layout = () => {
  return (
    <div className='App'>
      <SideBar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        
        <Outlet />

        
      </div>
    </div>
  );
};

export default Layout;
