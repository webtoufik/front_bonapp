import React from "react";
import { usePathname } from 'next/navigation'

const Menu = (props) => {
  //const user = useSelector(selectUser);
  const pathname = usePathname()
  console.log('pathname: ', pathname)


  return (
    <>
      <a className={pathname === '/' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/'>Accueil</a>
      <a className={pathname === '/contact' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/contact'>Contact</a>
      <a className={pathname === '/customers' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/customers'>Clients</a>
      <a className={pathname === '/trucks' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/trucks'>Véhicules</a>
      <a className={pathname === '/vouchers' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/vouchers'>Bons</a>
      <a className={pathname === '/users' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/users'>Utilisateurs</a>
      <a className={pathname === '/drivers' ? 'active' : 'hover:text-red-600 hover:text-xl'} href='/drivers'>Chauffeurs</a>
    </>
  )
}
export default Menu;

