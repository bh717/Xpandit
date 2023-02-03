/* eslint-disable jsx-a11y/alt-text */
import Bild from "./../../../../assets/images/omoss/Bild.png"


function ChosenProducts() {
	return (
		<section className="w-full flex justify-center flex-col items-center py-[6rem]">
			<div className=" w-[85%] flex gap-12">
				<div className="w-[40%] flex justify-left">
					<img src={Bild} />
				</div>
				<div className="w-full flex flex-col justify-center w-[50%] lg:w-[100%] text-left">
					<h3 className="text-[54px] font-acumin font-bold">Xpand It Media</h3>
					<p className="text-[22px] font-normal font-acumin">En digital mediabyrå med fokus på engagerande<br/>
					 content som förstärker företags digitala närvaro<br/>
					 på sociala medier<br/>
					 <br/>
					 Våra kunder blir alltid nöjda! Är det inte en<br/>
					 tillräcklig trygghet för er? Vi erbjuder vår unika<br/>
					  ”nöjd-kund garanti” som ger er pengarna tillbaka om ni inte vill använda filmen/materialet! Vi är så trygga med resultatet, att vi tar hela risken.
</p>
					<button className="bg-[#1E1E1E] rounded-[32px] w-[188px] h-[46px] text-white text-[20px] mt-[1rem]">Testa oss</button>
				</div>

			</div>
		</section>
	);
}

export default ChosenProducts;
