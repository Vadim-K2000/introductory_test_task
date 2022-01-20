import React from "react";
import "./styles.css";

const Card = (props) => {
    const { cardId, select, color } = props;
    const [selected, setSelected] = select;
    const marked = selected.find(item => item.cardId === cardId);

    const onClick = () => {
        if (marked) {
            setSelected(selected.map(item => 
                item.cardId === cardId ? '' : item
            ).filter(Boolean))
        } else {
            let tempArray = selected;
            setSelected(tempArray.concat({cardId: cardId, color: color}));
        }
    }
return (<div onClick={onClick} style={{backgroundColor: color}} className={marked ? "Card Border" : "Card"}/>)
}

export default Card;