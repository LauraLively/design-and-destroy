import { Button } from "react-bootstrap";

import DiceContainer from "../calc/diceRoller";


function Homepage () {

    return (
        <>
            <p>Hello World!</p>
            <Button href="#/Spells">Spells</Button>

            <DiceContainer></DiceContainer>
        </>
    )
}

export default Homepage;