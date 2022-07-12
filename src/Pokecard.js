import "./Pokecard.css";
const POKE_IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/**
 * takes props obj, destructed to id(num), name(str), and type (str)
 * returns single pokecard component
 * TODO: alt tag for image
 */
function Pokecard({ id, name, type }) {
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-name">{name}</h1>
      <img className="Pokecard-img" src={POKE_IMAGE_URL + `${id}.png`}></img>
      <p className="Pokecard-type">Type: {type}</p>
    </div>
  );
}

export default Pokecard;
