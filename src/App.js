import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [cards, setCards] = React.useState([
    {
      title: 'card1',
      imgUrl: 'placeholder',
      id: 1,
      clicked: false
    },
    {
      title: 'card2',
      imgUrl: 'placeholder',
      id: 2,
      clicked: false
    },
    {
      title: 'card3',
      imgUrl: 'placeholder',
      id: 3,
      clicked: false
    },
    {
      title: 'card4',
      imgUrl: 'placeholder',
      id: 4,
      clicked: false
    },
    {
      title: 'card5',
      imgUrl: 'placeholder',
      id: 5,
      clicked: false
    },
    {
      title: 'card6',
      imgUrl: 'placeholder',
      id: 6,
      clicked: false
    },
    {
      title: 'card7',
      imgUrl: 'placeholder',
      id: 7,
      clicked: false
    },
    {
      title: 'card8',
      imgUrl: 'placeholder',
      id: 8,
      clicked: false
    },
    {
      title: 'card9',
      imgUrl: 'placeholder',
      id: 9,
      clicked: false
    },
    {
      title: 'card10',
      imgUrl: 'placeholder',
      id: 10,
      clicked: false
    },
    {
      title: 'card11',
      imgUrl: 'placeholder',
      id: 11,
      clicked: false
    },
    {
      title: 'card12',
      imgUrl: 'placeholder',
      id: 12,
      clicked: false
    },
    {
      title: 'card13',
      imgUrl: 'placeholder',
      id: 13,
      clicked: false
    },
    {
      title: 'card14',
      imgUrl: 'placeholder',
      id: 14,
      clicked: false
    },
    {
      title: 'card15',
      imgUrl: 'placeholder',
      id: 15,
      clicked: false
    },
    {
      title: 'card6',
      imgUrl: 'placeholder',
      id: 16,
      clicked: false
    }
])

  let theCards = cards.map(card => {
    return (
      <Card 
        key={card.id}
        theCard={card}
        shuffle={shuffle}
      />
    )
  })

  function shuffle() {
    setIsPlaying(true)
    const mixed = cards.sort(() => Math.random() - 0.5)
    const newCards = [...mixed]
    setCards(newCards)
    console.log(cards)
  }

  return (
    <div className="App">
      <button className='startbtn' onClick={shuffle}>Start</button>
      {isPlaying && <div className='cardsContainer'>
        {theCards}
      </div>}
      
    </div>
  );
}

export default App;
