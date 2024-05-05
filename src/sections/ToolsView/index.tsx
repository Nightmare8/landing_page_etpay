
import Typography from '@components/Typography'
import CardIconTech from '@components/CardIconTech'
import './styles.css'


function index() {
  return (
    <section className='tools_content'>
      <header className='header_content'>
        <Typography variant='h2' variantClass="display xl semibold">Integrate with your favorite tools</Typography>
        <Typography variant='p' variantClass="p">Connect RegiM with your most favorite sales and marketings tools</Typography>
      </header>
      <div className='tools_icon_container'>
        <CardIconTech tech='slack' />
        <CardIconTech tech='quickbook' />
        <CardIconTech tech='mailchimp' />
        <CardIconTech tech='hubspot' />
        <div className="centered_row">
          <CardIconTech tech='zapier' />
          <CardIconTech tech='google-analytics' />
          <CardIconTech tech='marketo' />
        </div>
      </div>
    </section>
  )
}

export default index