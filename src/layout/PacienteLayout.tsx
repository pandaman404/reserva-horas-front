import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const PacienteLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default PacienteLayout;
