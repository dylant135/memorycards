import React from "react";

export default function Card(props) {
    function addClick() {
        if(props.theCard.clicked) {
            return
        } else {
            const clickedCard = props.cards.find((x) => x.title === props.theCard.title)
            const n = props.cards.map(card => {
                if(clickedCard.title === card.title) {
                    return {
                        title: card.title,
                        key: card.id,
                        id: card.id,
                        clicked: true,
                        imgUrl: 'placeholder'
                    }
                } else {
                    return {
                        title: card.title,
                        key: card.id,
                        id: card.id,
                        clicked: card.clicked,
                        imgUrl: 'placeholder'
                    }
                }
            })
            const newArr = [...n]
            props.setCards(newArr)
            console.log(props.cards)
    }}

    return (
        <div className="card" onClick={() => {
            props.shuffle();
            addClick();
        }}>
            {props.theCard.title}
        </div>
    )
}