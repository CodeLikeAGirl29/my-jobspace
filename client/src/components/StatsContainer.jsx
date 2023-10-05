import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import { MdDoNotDisturbOn } from "react-icons/md";
import Wrapper from "../assets/wrappers/StatsContainer";

const StatsContainer = () => {
	const { stats } = useAppContext();

	const defaultStats = [
		{
			title: "pending applications",
			count: stats.pending || 0,
			icon: <FaSuitcaseRolling />,
			color: "#e9b949",
			bcg: "#fcefc7",
		},
		{
			title: "interviews scheduled",
			count: stats.interview || 0,
			icon: <FaCalendarCheck />,
			color: "#dd571c",
			bcg: "#e0e8f9",
		},
		{
			title: "jobs declined",
			count: stats.declined || 0,
			icon: <MdDoNotDisturbOn />,
			color: "#d66a6a",
			bcg: "#ffeeee",
		},
	];

	return (
		<Wrapper>
			{defaultStats.map((item, index) => {
				return <StatItem key={index} {...item} />;
			})}
		</Wrapper>
	);
};

export default StatsContainer;
