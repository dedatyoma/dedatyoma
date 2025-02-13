import { useEffect, useState } from "react";
import skull from "./skull.png";
import clown from "./clown-face.png";
import hearts from "./face-hearts_.png";
import grinning from "./grinning-face.png";
import joy from "./joy.png";
import "./App.css";

function App() {
  const initialVotes = JSON.parse(localStorage.getItem("emojiVotes")) || {
    skull:3,
    clown:7,
    hearts:6,
    grinning:5,
    joy:4,
  };
  const [votes, setVotes] = useState(initialVotes);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("emojiVotes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: prevVotes[emoji]+1,
    }));
  }

  const showResults = () => {
    const winnerEmoji = Object.keys(votes).reduce((max, emoji) =>
      votes[emoji] > votes[max] ? emoji : max
    );
    setWinner(winnerEmoji);
  };  

  return (
    <div className="App">
      <header className="App-header">
        <div className='emoji-container'>
          <ul className='emoji-list'>
            {[
              {name: 'skull', img: skull},
              {name: 'clown', img: clown},
              {name: 'hearts', img: hearts},
              {name: 'grinning', img: grinning},
              {name: 'joy', img: joy},
            ].map(({name, img})=> (
              <li key={name}>
                <button className="emoji-button" onClick={() => handleVote(name)}>
                  <img src={img} className="App-logo" alt={name}/>
                </button>
                <p className="counter">{votes[name]}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="sign">
          Vote For The Best Emoji
        </p>
        <button className="show" alt="results" onClick={showResults}
        >
          Show Results
        </button>
        {winner && (
          <h3>The best Emoji is <img src={{skull, clown, hearts, grinning, joy}[winner]}/></h3>
        )}
      </header>
    </div>
  );
}

export default App;
