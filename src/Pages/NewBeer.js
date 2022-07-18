import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";

export default function NewBeer() {
  //const [fetching, setFetching] = useState(false);
  //form inputs
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tips("");
        setAttenuation_level(0);
        setContributed_by("");
        navigate("/beers");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="content">
      <nav>
        <Link to="/">
          <img src={Nav} alt="home" className="homeImg"></img>
        </Link>
      </nav>
    <form onSubmit={handleSubmit} className="content">
    <div className="inputs-general">

    <div>
        <label>Name</label>
        <input 
        className="input-box"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
    </div>
    <div>
        <label>Tagline</label>
        <input 
        className="input-box"
        type="text"
        name="tagline"
        onChange={(e) => setTagline(e.target.value)}
        value={tagline}
        />
    </div>
    <div>
        <label>Description</label>
        <textarea  
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        />
    </div>
    <div>
        <label>First Brewed</label>
        <input 
        className="input-box"
        type="text"
        name="first_brewed"
        onChange={(e) => setFirst_brewed(e.target.value)}
        value={first_brewed}
        />
    </div>
    <div>
        <label>Brewers Tips</label>
        <input 
        className="input-box"
        type="text"
        name="brewers_tips"
        onChange={(e) => setBrewers_tips(e.target.value)}
        value={brewers_tips}
        />
    </div>
    <div>
        <label>Attenuation Level</label>
        <input 
        className="input-box"
        type="number"
        name="attenuation_level"
        onChange={(e) => setAttenuation_level(e.target.value)}
        value={attenuation_level}
        />
    </div>
    <div>
        <label>Contributed by</label>
        <input 
        className="input-box"
        type="text"
        name="contributed_by"
        onChange={(e) => setContributed_by(e.target.value)}
        value={contributed_by}
        />
    </div>

    <button type="submit" className="buttonForm">Add Beer🍺</button>

    </div>
    </form>

    </div>

  );
}
