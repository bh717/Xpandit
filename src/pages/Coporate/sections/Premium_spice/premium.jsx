import SubProductSlider from "./../../../../components/ProductSlider/SubProductSlider";

function PremiumSpice() {
	return (
		<section className="w-full flex justify-center py-[6rem]" id="preimum-spices">
			<div className="w-[85%] flex gap-12">
				<div className="w-full flex flex-col w-[100%] lg:w-[100%] text-left">
					<h3 className="text-[64px] text-[#0B0B0B] font-acumin font-bold">Från en idé till en <br/> färdig film.</h3>
					<SubProductSlider/>
				</div>
			</div>
		</section>
	);
}

export default PremiumSpice;
