function Blog() {
	return (
		<section className="w-full flex justify-center py-16">
			<div className="w-[85%] grid grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-12">
				<div className="text-center self-left">
					<h3 className="text-6xl mb-8 text-left">
						Har du en brilljant 
						<br />
						idé (eller inte)?
					</h3>
					<div className="flex">
						<button className="rounded-[32px] bg-[#1E1E1E] w-[188px] h-[46px] text-[white] font-light text-[20px]">Starta projekt</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blog;
