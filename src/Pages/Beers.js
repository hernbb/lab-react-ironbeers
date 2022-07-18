import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"

const Beers = ()=>{
const [beers, setBeerList] = useState([]);

useEffect(()=>{
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response)=>{
        setBeerList(response.data)
    })
    

},[])


return(
<div className="content">
<nav>
<Link to="/">
    <img src={Nav} alt="home" className='homeImg'></img>
</Link>
</nav>
{beers.map((beer)=>{
    return(
        <div >
        <Link to= {`/beer/${beer.id}`} className="beerCard" style={{ textDecoration: 'none' }} key={beer.name}>
            <div className="beerCardImg">
                <img src={beer.image_url} alt="beer" className="beerImg"/>
            <div className="details">
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>{beer.contributed_by}</p>
            </div>
            </div>
        </Link>
        </div>
    )
})}

</div>
)


}

export default Beers