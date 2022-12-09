import {
	Blog,
	ChosenProducts,
    FilmProducts,
	Hero,
	PremiumSpice,
} from "./sections/index";

const Reklamfilm = () => {
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

export default Reklamfilm;
