import Nav from 'react-bootstrap/Nav';


function Header() {
    return (
      <div class="header">
        <div class="top-bar">

        </div>
        <Nav className="mb-0 p-4 main-nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#/CharacterCreate">Create a new Character</Nav.Link>
          <Nav.Link href="#/ViewCharacters">View your Characters</Nav.Link>
          <Nav.Link href="#/Login">Login</Nav.Link>
        </Nav>
      </div>
    );
}
    
export default Header;