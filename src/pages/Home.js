import { Button } from "react-bootstrap";
import logo from "../assets/logos/Design-and-Destroy-logo.png"


function Homepage () {

    return (
        <>
        <div class="text-center">
            <h2>Welcome to</h2>
            <img alt="Design and Destroy" src={logo} />
        </div>
        <div id="btn-container" class="d-flex justify-content-evenly grid gap-3 mt-4 mb-4">
            <Button type="button" class="btn btn-dark p-2 g-col-3" href="#/Spells">Create a Character</Button>
            <Button type="button" class="btn btn-dark p-2 g-col-3" href="#/Spells">Game Rules</Button>
            <Button type="button" class="btn btn-dark p-2 g-col-3" href="#/Classes">Classes</Button>
            <Button type="button" class="btn btn-dark p-2 g-col-3" href="#/Races">Races</Button>
            <Button type="button" class="btn btn-dark p-2 g-col-3" href="#/Spells">Spells</Button>
            <Button type="button" class="btn btn-dark p-2 g-col-3" href="#/Equipment">Equipment Search</Button>
            <Button type="button" class="btn btn-dark p-2 g-col-3" href="#/MonsterSearch">Monster Search</Button>
        </div>

            {/* <DiceContainer></DiceContainer> */}
        </>
    )
}

export default Homepage;