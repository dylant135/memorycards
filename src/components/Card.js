import React from "react";

export default function Card(props) {
    function addClick() {
        if(props.theCard.clicked) {
            props.setIsPlaying(false)
            if(props.score < 5) {
                props.setFinalScore(`Your final score is ${props.score}. That is pretty embaressing, step it up.`)
            } else if(props.score >= 5 && props.score < 10) {
                props.setFinalScore(`Your final score is ${props.score}. Not too bad, but you could do better`)
            } else if(props.score >= 10 && props.score < 16) {
                props.setFinalScore(`Your final score is ${props.score}. Good game.`)
            } else if(props.score === 16) {
                props.setFinalScore('Congrats, you played a perfect game!')
            } else {
                props.setFinalScore('Rut Ro something went wrong.')
            }
            props.setScore(0)
            props.setCards(props.initialState)
        } else {
            const clickedCard = props.cards.find((x) => x.title === props.theCard.title)
            const n = props.cards.map(card => {
                if(clickedCard.title === card.title) {
                    return {
                        title: card.title,
                        key: card.id,
                        id: card.id,
                        clicked: true,
                        imgUrl: card.imgUrl
                    }
                } else {
                    return {
                        title: card.title,
                        key: card.id,
                        id: card.id,
                        clicked: card.clicked,
                        imgUrl: card.imgUrl
                    }
                }
            })
            const newArr = [...n]
            props.setScore(prevScore => prevScore + 1)
            props.setCards(newArr)
    }}

    return (
        <div className="card" onClick={() => {
            props.shuffle();
            addClick();
        }}>
            <img src={props.theCard.imgUrl} className='cardimg' alt={props.theCard.title} />
        </div>
    )
}