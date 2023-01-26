import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [highScore, setHighscore] = React.useState(
    JSON.parse(localStorage.getItem("highscore")) || 0
  )
  React.useEffect(() => {
    if(score > highScore) {
      localStorage.setItem("highscore", JSON.stringify(score))
    }
}, [highScore, score])

  const initialState = [
    {
      title: '1',
      imgUrl: 'placeholder',
      id: 1,
      clicked: false
    },
    {
      title: '2',
      imgUrl: 'placeholder',
      id: 2,
      clicked: false
    },
    {
      title: '3',
      imgUrl: 'placeholder',
      id: 3,
      clicked: false
    },
    {
      title: '4',
      imgUrl: 'placeholder',
      id: 4,
      clicked: false
    },
    {
      title: '5',
      imgUrl: 'placeholder',
      id: 5,
      clicked: false
    },
    {
      title: '6',
      imgUrl: 'placeholder',
      id: 6,
      clicked: false
    },
    {
      title: '7',
      imgUrl: 'placeholder',
      id: 7,
      clicked: false
    },
    {
      title: '8',
      imgUrl: 'placeholder',
      id: 8,
      clicked: false
    },
    {
      title: '9',
      imgUrl: 'placeholder',
      id: 9,
      clicked: false
    },
    {
      title: '10',
      imgUrl: 'placeholder',
      id: 10,
      clicked: false
    },
    {
      title: '11',
      imgUrl: 'placeholder',
      id: 11,
      clicked: false
    },
    {
      title: '12',
      imgUrl: 'placeholder',
      id: 12,
      clicked: false
    },
    {
      title: '13',
      imgUrl: 'placeholder',
      id: 13,
      clicked: false
    },
    {
      title: '14',
      imgUrl: 'placeholder',
      id: 14,
      clicked: false
    },
    {
      title: '15',
      imgUrl: 'placeholder',
      id: 15,
      clicked: false
    },
    {
      title: '16',
      imgUrl: 'placeholder',
      id: 16,
      clicked: false
    }
  ]
  const [cards, setCards] = React.useState(initialState)

  let theCards = cards.map(card => {
    return (
      <Card 
        key={card.id}
        cards={cards}
        theCard={card}
        score={score}
        setScore={setScore}
        initialState={initialState}
        setIsPlaying={setIsPlaying}
        shuffle={shuffle}
        setCards={setCards}
      />
    )
  })

  function shuffle() {
    const mixed = cards.sort(() => Math.random() - 0.5)
    const newCards = [...mixed]
    setCards(newCards)
  }

  function startGame() {
    setIsPlaying(true)
  }

  return (
    <div className="App">
      <h1>Memory Cards</h1>
      <div className='scoresContainer'>
        <h2>Score: {score}</h2>
        <h2>highScore: {highScore}</h2>
      </div>
      {!isPlaying && <div className='startbtnContainer'><button className='startbtn' onClick={startGame}>Start</button></div>}
      {isPlaying && <div className='cardsContainer'>
        {theCards}
      </div>}
      
    </div>
  );
}

export default App;
