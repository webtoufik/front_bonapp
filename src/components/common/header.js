import Image from 'next/image'
import logoTns from '../../../public/logo_tns.png'
import Menu from './menu'

const Header = (props) => {
  //const user = useSelector(selectUser);

  return (
    <nav className='flex justify-between items-center p-8 shadow'>
      <a href='/'>
        <Image
          className='shadow-xl hover:shadow-sm hover:scale-95 transition duration-300'
          src={logoTns}
          alt="Logo TNS"
          width={100}
          height={50}
        />
      </a>
      <Menu />
      <button className='customButton'>Connexion</button>
    </nav>
  )
}
export default Header;
