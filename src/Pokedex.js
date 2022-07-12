import Pokecard from "./Pokecard";
import "./Pokedex.css"

/**maps over array of pokemon data and return div with mulitple Pokecards in it
 * takes props obj, destructed to pokemon array of objects
 */
function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex">
      {pokemon.map((p) => (
        <div className="Pokedex-card">
          <Pokecard name={p.name} type={p.type} id={p.id} />
        </div>
      ))}
    </div>
  );
}

export default Pokedex;
