import { useState } from 'react';
import './App.css';

const phrases = [
  "No", "Are you sure?", "Really sure?", "Pookie please",
  "Don't do this to me", "I'm gonna cry...", "You're breaking my heart ;(",
  "Okay fine, I will stop asking...", "Just kidding, SAY YES PLEASE! ❤️"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function handleYesClick() {
    setYesPressed(true);
    // Play music when Yes is pressed
    const audio = new Audio('/music.mp3'); 
    audio.play();
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        /* Section 1: SUCCESS STATE (Video removed, Bears added) */
        <div className="success-screen">
          <img
            className="bear-img"
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text success-text">Yay!!! I love you! ❤️</div>
        </div>
      ) : (
        /* Section 2: QUESTION STATE (Bears removed, Video stays) */
        <div className="question-screen">
          <video 
            className="main-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/valentine-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="text">Will you be my Valentine?</div>
          <div className="buttons">
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              className="no-button"
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;