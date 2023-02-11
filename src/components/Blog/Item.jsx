function Item({ img, title, description, href }) {
	return (
		<article className="flex flex-col">
			<img src={img} alt="" />
			<h2 className="text-lg my-2">{title}</h2>
			<p className="text-[#545454] max-w-80 mb-2">{description}</p>
			<a href={href} className="text-lg">
				- Läs mer
			</a>
		</article>
	);
}

export default Item;
