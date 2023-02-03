/* eslint-disable jsx-a11y/alt-text */
import Bild from "./../../../../assets/images/reklam/Bild.png"


function ChosenProducts() {
	return (
		<section className="w-full flex justify-center flex-col items-center py-[6rem]">
			<div className="w-[85%] flex gap-12 items-center justify-center">
				<div className="w-full flex flex-col justify-center w-[50%] lg:w-[100%] text-left">
					<h3 className="text-[54px] font-acumin font-bold">We Create Ads.</h3>
					<p className="text-[22px] font-normal font-acumin">Xpand It Media riktar in sig på Ecommerce och<br/>
					 Bran- ding-filmer. Våra rötter i marknadsföring och <br/> 
					 performance marketing gör oss exceptionella på <br/>
					 att skapa innehåll till konverterande annonser <br/>
					 som överträffar förväntningar.<br/><br/>
						Vi erbjuder Performance ContentTM – ett upplägg <br/>
						för redigering av A/B annonser i syfte att <br/>
						utvärdera och förbättra resultat i annonsering.</p>
					<button className="bg-[#1E1E1E] rounded-[32px] w-[188px] h-[46px] text-white text-[20px] mt-[1rem]">Testa oss</button>
				</div>
				<div className="w-[40%] flex justify-center">
					<img src={Bild}/>
				</div>
			</div>
		</section>
	);
}

export default ChosenProducts;
