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

  React.useEffect(() => {
    if(score > highScore) {
      setHighscore(score)
    }
  }, [highScore, score])

  const initialState = [
    {
      title: 'Antman',
      imgUrl: '/imgs/antman.jpeg',
      id: 1,
      clicked: false
    },
    {
      title: 'Captain',
      imgUrl: '/imgs/captain.png',
      id: 2,
      clicked: false
    },
    {
      title: 'Falcon',
      imgUrl: '/imgs/falcon.png',
      id: 3,
      clicked: false
    },
    {
      title: 'Gamora',
      imgUrl: '/imgs/gamora.png',
      id: 4,
      clicked: false
    },
    {
      title: 'Groot',
      imgUrl: '/imgs/groot.png',
      id: 5,
      clicked: false
    },
    {
      title: 'Hawkeye',
      imgUrl: '/imgs/hawkeye.jpeg',
      id: 6,
      clicked: false
    },
    {
      title: 'Hulk',
      imgUrl: '/imgs/hulk.jpeg',
      id: 7,
      clicked: false
    },
    {
      title: 'Ironman',
      imgUrl: '/imgs/ironman.png',
      id: 8,
      clicked: false
    },
    {
      title: 'Black Panther',
      imgUrl: '/imgs/panther.jpeg',
      id: 9,
      clicked: false
    },
    {
      title: 'Rocket',
      imgUrl: '/imgs/rocket.png',
      id: 10,
      clicked: false
    },
    {
      title: 'Shang-Chi',
      imgUrl: '/imgs/shang.jpeg',
      id: 11,
      clicked: false
    },
    {
      title: 'Spiderman',
      imgUrl: '/imgs/spiderman.jpeg',
      id: 12,
      clicked: false
    },
    {
      title: 'Dr. Strange',
      imgUrl: '/imgs/strange.jpeg',
      id: 13,
      clicked: false
    },
    {
      title: 'Scarlet Witch',
      imgUrl: '/imgs/switch.jpeg',
      id: 14,
      clicked: false
    },
    {
      title: 'Thor',
      imgUrl: '/imgs/thor.png',
      id: 15,
      clicked: false
    },
    {
      title: 'Vision',
      imgUrl: '/imgs/vision.jpeg',
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
