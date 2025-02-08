import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <SwapiCharacter />
    </div>
  );
}

const character = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
};

const SwapiCharacter = () => {
  return (
    <div className="container mt-4">
      <div className="card p-3">
        <h2 className="card-title text-center">{character.name}</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Height:</strong> {character.height} cm</li>
          <li className="list-group-item"><strong>Mass:</strong> {character.mass} kg</li>
          <li className="list-group-item"><strong>Hair Color:</strong> {character.hair_color}</li>
          <li className="list-group-item"><strong>Skin Color:</strong> {character.skin_color}</li>
          <li className="list-group-item"><strong>Eye Color:</strong> {character.eye_color}</li>
          <li className="list-group-item"><strong>Birth Year:</strong> {character.birth_year}</li>
          <li className="list-group-item"><strong>Gender:</strong> {character.gender}</li>
        </ul>
      </div>
    </div>
  );
}

export default SwapiCharacter;
