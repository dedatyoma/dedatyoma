import { useState, useEffect } from "react";
import skull from "./assets/skull.png";
import clown from "./assets/clown-face.png";
import hearts from "./assets/face-hearts_.png";
import grinning from "./assets/grinning-face.png";
import joy from "./assets/joy.png";
import "./App.css";

const emojiList = [
  {name: 'skull', img: skull},
  {name: 'clown', img: clown},
  {name: 'hearts', img: hearts},
  {name: 'grinning', img: grinning},
  {name: 'joy', img: joy},
];

const EmojiButton = ({name, img, votes, onVote}) => {
  return (
    <li>
      <button className="emoji-button" onClick={() => onVote(name)}>
        <img src={img} className="App-logo" alt={name}/>
      </button>
      <p className="counter">{votes[name]}</p>
    </li>
  )
};

const EmojiList = ({votes, onVote}) => {
  return (
    <div className="emoji-container">
      <ul className="emoji-list">
        {emojiList.map(({name, img}) => (
          <EmojiButton
          key={name}
          name={name}
          img={img}
          votes={votes}
          onVote={onVote}
          />
        ))}
      </ul>
    </div>
  )
};

const WinnerDisplay = ({winner}) => {
  const emojiImages = { skull, clown, hearts, grinning, joy };
  return winner ? (
    <h3>The best Emoji is <img src={emojiImages[winner]} alt={winner}/></h3>
  ) : null;
};

  const App = () => {
    const [votes, setVotes] = useState(JSON.parse(localStorage.getItem("emojiVotes")) || {
      skull: 3,
      clown: 7,
      hearts: 6,
      grinning: 5,
      joy: 4,
    });
    const [winner, setWinner] = useState(null);
    useEffect(() => {
      localStorage.setItem("emojiVotes", JSON.stringify(votes));
    }, [votes]);

    const handleVote = (emoji) => {
      setVotes(prevVotes => ({
        ...prevVotes,
        [emoji]: prevVotes[emoji] +1,
      }));
    };

  const showResults = () => {
    const winnerEmoji = Object.keys(votes).reduce((max, emoji) =>
      votes[emoji] > votes[max] ? emoji : max
  );
  setWinner(winnerEmoji);
};

    return (
      <div className="App">
        <header className="App-header">
          <EmojiList 
            votes={votes} 
            onVote={handleVote} 
          />
          <p className="sign">Vote For The Best Emoji</p>
          <button className="show" alt="results" onClick={showResults}>
            Show Results
          </button>
          <WinnerDisplay winner={winner} />
        </header>
      </div>
    );
};

export default App;
