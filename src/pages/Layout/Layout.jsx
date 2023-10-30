import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

function Layout({quantity}) {
    return (
        <>
            <Header quantity={quantity}/>
            <Outlet />
        </>
    );
}

export default Layout;