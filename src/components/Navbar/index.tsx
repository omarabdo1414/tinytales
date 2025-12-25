"use client"
import DesktopView from './desktop';
import MobileView from './mobile';

const NavBar = () => {
    
    return (
        <div className='container'>
            <div className='max-lg:hidden'>
                <DesktopView />
            </div>
            <div className='hidden max-lg:block'>
                <MobileView />
            </div>
        </div>
    );
}

export default NavBar;