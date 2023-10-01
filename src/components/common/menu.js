import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import Modal from 'react-modal';

const Menu = (props) => {
  //const user = useSelector(selectUser);
  const pathname = usePathname()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (

    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-between items-center">

        {/* Menu burger pour mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="block text-gray-900 hover:text-red-600 focus:text-red-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 12a1 1 0 01-1 1H6a1 1 0 110-2h12a1 1 0 011 1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h16a1 1 0 100-2H4z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:flex lg:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a className={pathname === '/' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/'>Accueil</a>
        <a className={pathname === '/contact' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/contact'>Contact</a>
        <a className={pathname === '/customers' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/customers'>Clients</a>
        <a className={pathname === '/trucks' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/trucks'>Véhicules</a>
        <a className={pathname === '/vouchers' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/vouchers'>Bons</a>
        <a className={pathname === '/users' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/users'>Utilisateurs</a>
        <a className={pathname === '/drivers' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/drivers'>Chauffeurs</a>
      </div>

      <Modal
        isOpen={isMobileMenuOpen}
        onRequestClose={toggleMobileMenu}
        contentLabel="Menu Mobile"
      >
        <div className="flex flex-col justify-around text-center">
          <a
            className={pathname === '/' ? 'active' : 'hover:text-red-600 hover:text-xl'}
            href='/'
            onClick={toggleMobileMenu}
          >
            Accueil
          </a>
          <a
            className={pathname === '/contact' ? 'active' : 'hover:text-red-600 hover:text-xl'}
            href='/contact'
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
          <a
            className={pathname === '/customers' ? 'active' : 'hover:text-red-600 hover:text-xl'}
            href='/customers'
            onClick={toggleMobileMenu}
          >
            Clients
          </a>
          <a
            className={pathname === '/trucks' ? 'active' : 'hover:text-red-600 hover:text-xl'}
            href='/trucks'
            onClick={toggleMobileMenu}
          >
            Véhicules
          </a>
          <a
            className={pathname === '/vouchers' ? 'active' : 'hover:text-red-600 hover:text-xl'}
            href='/vouchers'
            onClick={toggleMobileMenu}
          >
            Bons
          </a>
          <a
            className={pathname === '/users' ? 'active' : 'hover:text-red-600 hover:text-xl'}
            href='/users'
            onClick={toggleMobileMenu}
          >
            Utilisateurs
          </a>
          <a
            className={pathname === '/drivers' ? 'active' : 'hover:text-red-600 hover:text-xl'}
            href='/drivers'
            onClick={toggleMobileMenu}
          >
            Chauffeurs
          </a>
        </div>
      </Modal>
    </div>

  )
}

export default Menu;

