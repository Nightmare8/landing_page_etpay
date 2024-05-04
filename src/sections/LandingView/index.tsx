import PrimaryButton from "@components/PrimaryButton"
import Typography from "@components/Typography"
import MockupImage from "@components/MockupImage"
import './styles.css'


function index() {
  return (
    <section className="main_content">
      <article className="text_content">
        <Typography variant="h1" variantClass="display 2xl semibold">Event Registration ReImagined</Typography>
        <Typography variant="p" variantClass="display sm">Manage your event registrations hassle free and without any dependency with the technical team. Isn't it sounds amazing?</Typography>
        <PrimaryButton title="Get Early Access" />
      </article>
      <aside className="hero_image">
        <MockupImage />
      </aside>
    </section>
  )
}

export default index