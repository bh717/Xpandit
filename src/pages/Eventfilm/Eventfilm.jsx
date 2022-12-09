import {
	Blog,
	ChosenProducts,
    FilmProducts,
	Hero,
	PremiumSpice,
} from "./sections/index";

const Eventfilm = () => {
	return (
		<>
			<Hero/>
			<ChosenProducts/>
            <FilmProducts/>
			<PremiumSpice/>
			<Blog/>
		</>
	);
};

export default Eventfilm;
