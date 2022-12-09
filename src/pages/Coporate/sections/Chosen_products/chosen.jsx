/* eslint-disable jsx-a11y/alt-text */
import Bild from "./../../../../assets/images/coporate/Bild.png"


function ChosenProducts() {
	return (
		<section className="w-full flex justify-center flex-col items-center py-[6rem]">
			<div className="w-[85%] flex gap-12">
				<div className="w-full flex flex-col justify-center w-[50%] lg:w-[100%] text-left">
					<h3 className="text-[64px] font-acumin font-bold">Professional Videos for <br/>Brand Aware Clients.</h3>
					<p className="text-[32px] font-normal font-acumin">Intervjuer, Employer Branding, demofilmer. Xpand<br/> 
					It Media brinner för att hjälpa branschledande<br/> företag att förmedla viktiga budskap till sina<br/> följare. Filmproduktion är ett modernt,<br/> framträdande sätt att sprida information.</p>
					<button className="bg-[#1E1E1E] rounded-[32px] w-[188px] h-[46px] text-white text-[20px] mt-[1rem]">Testa oss</button>
				</div>
				<div className="w-[50%] flex justify-center">
					<img src={Bild}/>
				</div>
			</div>
		</section>
	);
}

export default ChosenProducts;
