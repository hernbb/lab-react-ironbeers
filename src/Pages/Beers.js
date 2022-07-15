import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"

const Beers = ()=>{
const [beer, setBeerList] = useState();
return(
<div>
<nav>
<Link to="/">
    <img src={Nav} alt="home" className='homeImg'></img>
</Link>
</nav>

</div>
)


}

export default Beers