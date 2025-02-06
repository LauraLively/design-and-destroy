import React from "react"

import "bootstrap"

import "./diceRoller.css"

const diceSizeValues = [];
const rollValues = [];

function DiceContainer() {
// const diceOptions = [
//     {value:4, label:"4"},
//     {value:6, label:"6"},
//     {value:8, label:"8"},
//     {value:10, label:"10"},
//     {value:12, label:"12"},
//     {value:20, label:"20"},
// ]
    return(
        <>
            <div id="container">
                <h1>Dice Roller</h1>
                <label>Dice size</label>
                <select id="diceNum" defaultValue="20">
                    <option value="4">4</option> 
                    <option value="6">6</option> 
                    <option value="8">8</option> 
                    <option value="10">10</option> 
                    <option value="12">12</option> 
                    <option value="20">20</option> 
                </select> 
                <button onClick={rollDice}>Roll Dice</button>
                <div className="container">
                    <div className="row justify-content-md-center align-items-center">
                        <div className="col-md-6 px-0">
                            Dice Rolled:
                            <div id="diceRolled" ></div>
                        </div>
                        <div className="col-md-6 px-0">
                            Result:
                            <div id="diceResult"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function rollDice(){
    const diceNum = document.getElementById("diceNum").value;
    const diceRolled = document.getElementById("diceRolled");
    const diceResult = document.getElementById("diceResult");
    
    var value = Math.floor(Math.random() * diceNum) + 1;

    diceSizeValues.unshift(diceNum);
    rollValues.unshift(value);
    console.log(rollValues)

    var diceSizeValuesText = "";
    for (let i = 0; i < diceSizeValues.length; i++){
        if(i % 2 === 0){
            diceSizeValuesText += ("<p style=\"background: #CBCBCB\">" + diceSizeValues[i] + "</p>")
        } else{
            diceSizeValuesText += ("<p>" + diceSizeValues[i] + "</p>")
        }       
    }

    var rollValuesText = "";
    for (let i = 0; i < rollValues.length; i++){
        if(i % 2 === 0){
            rollValuesText += ("<p style=\"background: #CBCBCB\">" + rollValues[i] + "</p>")
        } else{
            rollValuesText += ("<p>" + rollValues[i] + "</p>")
        }
    }

    diceRolled.innerHTML = diceSizeValuesText;
    diceResult.innerHTML = rollValuesText;
    
}

export default DiceContainer;