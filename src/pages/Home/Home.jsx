import {
	Blog,
	ChosenProducts,
	Hero,
	PremiumSpice,
} from "./sections/index";

const Home = () => {
	return (
		<>
			<Hero/>
			<ChosenProducts/>
			<PremiumSpice/>
			<Blog/>
		</>
	);
};

export default Home;
