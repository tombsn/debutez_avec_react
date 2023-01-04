import '../styles/Banner.css'
import logo from '../assets/logo_jungle.png'

function Banner() {
    const title = 'La maison de la jungle';
    return (
        <div className="lmj-banner">
            <img src={logo} alt='La maison de la jungle' className='lmj-logo'/>
            <h1>{title}</h1>
        </div>
    )
}

export default Banner