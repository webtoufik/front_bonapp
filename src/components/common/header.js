import logoTns from '../../../public/logo_tns.png'
import Menu from './menu'

const Header = (props) => {
    //const user = useSelector(selectUser);
  
    return (
    <>
      <img
        src={logoTns}
        alt="Logo TNS"
        width= '100px'
        height= '50px'
      />
      <Menu />
    </>
    )
  }
  export default Header;
  