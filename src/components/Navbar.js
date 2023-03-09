import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <h1>Random Password Generator</h1>
        </div>
    );
}
 
export default Navbar;