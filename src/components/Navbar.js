import logo_icon from '../assets/logo_icon.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo_icon} alt="logo_icon" className="navbar_logo"/>
            <h1>Random Password Generator</h1>
        </div>
    );
}
 
export default Navbar;


