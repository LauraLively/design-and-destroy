import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div>
            <h1>Oops!</h1>
            <h3>Looks like you have reached a page that does not exist.</h3>
            <br/>
            <h3>Click <Link to="/">Here</Link> to return to the home page.</h3>
        </div>
    )
}

export default NoMatch;