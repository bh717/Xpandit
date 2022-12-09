import SubProductSlider from "./../../../../components/ProductSlider/SubProductSlider";

function PremiumSpice() {
	return (
		<section className="w-full flex justify-center py-[6rem]" id="preimum-spices">
			<div className="w-[85%] flex gap-12">
				<div className="w-full flex flex-col w-[100%] lg:w-[100%] text-center">
					<h3 className="text-[64px] font-acumin font-bold">Vad våra kunder <br/>säger om oss</h3>
					<SubProductSlider/>
				</div>
			</div>
		</section>
	);
}

export default PremiumSpice;
