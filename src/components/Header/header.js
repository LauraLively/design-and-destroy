
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Nav className="mb-0 p-4">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/CharacterCreate">Create a new Character</Nav.Link>
            <Nav.Link href="/">View your Characters</Nav.Link>
        </Nav>
    )
}
    
export default Header;