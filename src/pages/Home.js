import { Button } from "react-bootstrap";
import logo from "../assets/logos/Design-and-Destroy-logo.png"
import DiceContainer from "../calc/diceRoller";


function Homepage () {

    return (
        <>
        <div class="text-center">
            <h2>Welcome to</h2>
            <img src={logo} />
        </div>
        <div id="btn-container" class="d-flex justify-content-evenly grid gap-3 mt-4 mb-4">
            <Button type="button" class="btn-paper btn-secondary p-2 g-col-3" href="#/Spells">Create a Character</Button>
            <Button type="button" class="btn btn-primary p-2 g-col-3" href="#/Spells">Game Rules</Button>
            <Button type="button" class="btn btn-primary p-2 g-col-3" href="#/Spells">Classes</Button>
            <Button type="button" class="btn btn-primary p-2 g-col-3" href="#/Spells">Spells</Button>
            <Button type="button" class="btn btn-primary p-2 g-col-3" href="#/Equipment">Equipment</Button>
            <Button type="button" class="btn btn-primary p-2 g-col-3" href="#/MonsterSearch">Monster Search</Button>
        </div>

            {/* <DiceContainer></DiceContainer> */}
        </>
    )
}

export default Homepage;