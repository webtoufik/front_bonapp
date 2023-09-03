import React from "react";

const Menu = (props) => {
  //const user = useSelector(selectUser);

  return (
    <>
      <a className="hover:text-red-600 hover:text-xl" href='/'>Accueil</a>
      <a className="hover:text-red-600 hover:text-xl" href='/contact'>Contact</a>
      <a className="hover:text-red-600 hover:text-xl" href='/customers'>Clients</a>
      <a className="hover:text-red-600 hover:text-xl" href='/vehicles'>Véhicules</a>
      <a className="hover:text-red-600 hover:text-xl" href='/vouchers'>Bons</a>
      <a className="hover:text-red-600 hover:text-xl" href='/users'>Utilisateurs</a>
      <a className="hover:text-red-600 hover:text-xl" href='/drivers'>Chauffeurs</a>
    </>
  )
}
export default Menu;
