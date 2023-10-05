import logo from "../assets/images/logo.png";

/**
 * Renders the logo component.
 *
 * @return {JSX.Element} The logo component.
 */
const Logo = () => {
	return <img src={logo} alt='jobscape' className='logo' />;
};

export default Logo;
