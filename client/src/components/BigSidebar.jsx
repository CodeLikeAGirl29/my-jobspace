import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/BigSidebar";

/**
 * Render the BigSidebar component.
 *
 * @return {JSX.Element} The rendered BigSidebar component.
 */
const BigSidebar = () => {
	const { showSidebar } = useAppContext();
	return (
		<Wrapper>
			<div
				className={
					showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
				}
			>
				<div className='content'>
					<header>
						<Logo />
					</header>
					<NavLinks />
				</div>
			</div>
		</Wrapper>
	);
};

export default BigSidebar;
