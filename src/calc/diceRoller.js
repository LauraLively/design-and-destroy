import { useState } from 'react';

import { Button } from "react-bootstrap";

import "./diceRoller.css"

function DiceContainer() {
    const [dieSizes, setDieSizes] = useState([]);
    const [rollValues, setRollValues] = useState([]);

    function rollDice(dieValue) {
        const rollResult = Math.floor(Math.random() * dieValue) + 1;

        // Update states
        setDieSizes((prevSizes) => [dieValue, ...prevSizes]);
        setRollValues((prevRolls) => [rollResult, ...prevRolls]);
    }


    return (
        <div id="container">
            <h1>Dice Roller</h1>
            <div className="row justify-content-md-center align-items-start">
                <div className="col-md-4 px-0">
                    {/* Dice Buttons */}
                    {[4, 6, 8, 10, 12, 20, 100].map((die) => (
                        <>
                            <button key={die} onClick={() => rollDice(die)}>
                                D{die}
                            </button>
                            <br />
                        </>
                    ))}
                </div>


                <div className="col-md-4 px-0">
                    <h3>Dice Rolled:</h3>
                    <div id="diceRolled">
                        {dieSizes.map((dieSize, index) => (
                            <p key={index} style={{ background: index % 2 === 0 ? "#CBCBCB" : "transparent" }}>
                                D{dieSize}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="col-md-4 px-0">
                    <h3>Results:</h3>
                    <div id="diceResult">
                        {rollValues.map((value, index) => (
                            <p key={index} style={{ background: index % 2 === 0 ? "#CBCBCB" : "transparent" }}>
                                {value}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiceContainer;