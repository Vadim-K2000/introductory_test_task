import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "./Card";

const CardBlock = () => {
const [selected, setSelected] = useState([]);
const [message, setMessage] = useState();

useEffect(() => {
    console.log("selected", selected)
}, [selected])

const infoPanel = () => {
    const checkingSelected = () => {
        let count = 0;
        selected.forEach((item) => {
            if (item.color === "blue") {
                count++;
            }
        })
        if (count === 0 && selected.length === 0) {
            setMessage("Items not selected!")
        } else if (count === 0 && selected.length !== 0) {
            setMessage("Selected items are not blue")
        }else if (count === 1) {
            setMessage("Not all blue items selected")
        } else if (count === 2 && selected.length > 2) {
            setMessage("Selected items are not only blue") 
        } else if (count === 2 ) {
            setMessage("All blue items selected!")
        }
    }
    
    return <div style={{width: 780, display: "flex", flexWrap: "nowrap"}}>
        <button onClick={checkingSelected} className="button">Submit</button><div className="message">{message}</div>
    </div>
}

return (<div className="Card_block">
    {infoPanel()}
        <Card cardId={"1"} select={[selected, setSelected]} color={"orange"}/>
        <Card cardId={"2"} select={[selected, setSelected]} color={"blue"}/>
        <Card cardId={"3"} select={[selected, setSelected]} color={"black"}/>
        <Card cardId={"4"} select={[selected, setSelected]} color={"yellow"}/>
        <Card cardId={"5"} select={[selected, setSelected]} color={"green"}/>
        <Card cardId={"6"} select={[selected, setSelected]} color={"blue"}/>
</div>)
}

export default CardBlock;