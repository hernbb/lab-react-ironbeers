import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"

const Beers = ()=>{
const [beers, setBeerList] = useState([]);
const [fetching, setFetching] = useState(false);

useEffect(()=>{
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response)=>{
        setBeerList(response.data)
        setFetching(true)
    })
    .catch((e)=>{
        console.log(e)
    })
    

},[])


return fetching ? (
<div className="content">
<nav>
<Link to="/">
    <img src={Nav} alt="home" className='homeImg'></img>
</Link>
</nav>
{beers.map((beer)=>{
    return (
        <div >
        <Link to={`/beers/${beer._id}`} className="beerCard" style={{ textDecoration: 'none' }} key={beer._id}>
            <div className="beerCardImg">
                <img src={beer.image_url} alt="beer" className="beerImg"/>
            <div className="details">
                <h4>{beer.name}</h4>
                <h5>{beer.tagline}</h5>
                <p>{beer.contributed_by}</p>
            </div>
            </div>
        </Link>
        </div>
    )
})}

</div>
) : ( 
    <div>Loading</div>
)


}

export default Beers