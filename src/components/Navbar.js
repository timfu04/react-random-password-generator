import logo from '../assets/logo.svg'

const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <h1>Random Password Generator</h1>
        </div>
    );
}
 
export default NavBar;


