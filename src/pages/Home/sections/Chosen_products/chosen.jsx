/* eslint-disable jsx-a11y/alt-text */
import filmImage1 from './../../../../assets/images/dashboard/film-1.png';
import filmImage2 from './../../../../assets/images/dashboard/film-2.png';
import filmImage3 from './../../../../assets/images/dashboard/film-3.png';
import kunder from './../../../../assets/images/dashboard/Kunder.png';


function ChosenProducts() {
	return (
		<section className="w-full flex justify-center flex-col">
			<div className="w-full grid flex-row grid-cols-3">
				<div className="w-full flex flex-col relative">
					<img src={filmImage1} className="w-full h-[auto]" />
					<p className='font-bold text-[50px] text-white absolute left-[3%] top-[88%]'>REKLAMFILM</p>
				</div>
				<div className="w-full flex flex-col relative">
					<img src={filmImage2} className="w-full h-[auto]" />
					<p className='font-bold text-[50px] text-white absolute left-[3%] top-[88%]'>EVENTFILM</p>
				</div>
				<div className="w-full flex flex-col relative">
					<img src={filmImage3} className="w-full h-[auto]" />
					<p className='font-bold text-[50px] text-white absolute left-[3%] top-[88%]'>CORPORATE</p>
				</div>
			</div>
			<div className='w-full flex flex-col justify-center items-center py-[4rem]'>
				<div className="w-[60%] h-[131px] bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${kunder})` }} />
				<div className="w-[60%] h-[131px] bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${kunder})` }} />
			</div>
		</section>
	);
}

export default ChosenProducts;
