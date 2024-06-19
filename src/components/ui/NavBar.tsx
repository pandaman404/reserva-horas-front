import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='justify-self-end bg-base-100'>
      <ul className='flex justify-center gap-5 px-3 py-2'>
        <li>
          <NavLink to='/' className='aria-[current=page]:text-primary'>
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
