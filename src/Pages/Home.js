import { Link } from 'react-router-dom'
import beers from "../assets/beers.png"
import randomBeers from "../assets/random-beer.png"
import newBeer from "../assets//new-beer.png"

const Home = () => {
    return (
        <div>
        <h1 className='ironbeers'>IronBeers</h1>
        <section className='sectionHome'>
        <Link to="/beers" style={{ textDecoration: 'none' }}>
        <img src={beers}alt="beers" className='homeImg'></img>
        <h3 className='title'>All Beers</h3>     
        <p className='textHome'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Link>
        </section>
        <section className='sectionHome'>
        <Link to="/random-beer" style={{ textDecoration: 'none' }}>
        <img src={randomBeers}alt="random-beer" className='homeImg'></img>
        <h3 className='title'>Random Beer</h3>     
        <p className='textHome'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Link>
        </section>
        <section className='sectionHome'>
        <Link to="/new-beer" style={{ textDecoration: 'none' }}>
        <img src={newBeer}alt="new-beer" className='homeImg'></img>
        <h3 className='title'>New Beer</h3>     
        <p className='textHome'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Link>
        </section>
        </div>
     

    )}
export default Home