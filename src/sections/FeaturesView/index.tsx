import Typography from "@components/Typography";
import NoteImage from "@components/NoteImage";
import CardTech from "@components/CardTech";

import { services } from "@data/services.tsx";
import "./styles.css";

function index() {
	return (
		<section className="features_content">
			<article className="note_content">
				<header className="note_header_content">
					<Typography variant="h1" variantClass="display xl semibold">
						All-in-one Event Platform
					</Typography>
					<Typography
						variant="p"
						variantClass="p"
						type="neutral"
						numberPallete={700}
					>
						Deliver an exceptional event experiencie
					</Typography>
				</header>
				<NoteImage />
			</article>
			<section className="features_grid">
				{services.map((service, index) => (
					<CardTech
						key={index}
						title={service.title}
						description={service.description}
						image={service.image}
					/>
				))}
			</section>
		</section>
	);
}

export default index;
