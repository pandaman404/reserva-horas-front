import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-base-100 justify-self-end'>
            <ul className='flex justify-center gap-5 px-3 py-2'>
                <li>
                    <NavLink
                        to='/'
                        className='aria-[current=page]:text-primary'
                    >
                        Realizar reserva
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/anular-hora'
                        className='aria-[current=page]:text-primary'
                    >
                        Anular reserva
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
