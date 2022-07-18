import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";

export default function SingleBeer() {
  const [fetching, setFetching] = useState(false);
  const [beers, setBeers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setBeers(response.data);
        setFetching(true);
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line
  }, []);
  return fetching ? (
    <div className="content">
      <nav>
        <Link to="/">
          <img src={Nav} alt="home" className="homeImg"></img>
        </Link>
      </nav>
      <div className="beerCardImg">
                <img src={beers.image_url} alt="beer" className="beerImg"/>
            <div className="details">
                <h4>{beers.name}</h4>
                <h5>{beers.tagline}</h5>
                <h6>{beers.first_brewed}</h6>
                <h6>{beers.attenuation_level}</h6>
                <p>{beers.description}</p>
                <p>{beers.contributed_by}</p>
            </div>
            </div>

    </div>
  ) : (
    <div>Loading</div>
  );
}
