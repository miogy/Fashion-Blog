import { Navbar, Container, Offcanvas, NavDropdown, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.scss';

function Header(){
  return (
    <div className="nav-box">
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" 
        expand={expand} className="mb-3"
        style={{paddingRight:"5%"}} >
          <Container fluid>
            <Link to="/" style={{textDecoration:"none", paddingLeft:"5%"}}>
            <Navbar.Brand 
            className="nav-container"
            >MIOGY</Navbar.Brand></Link>
            <Navbar.Toggle 
            aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" style={{textDecoration:"none",color:"#333"}}>
                  <Nav>Home</Nav></Link>
                  <Link to="/about" style={{textDecoration:"none", color:"#333"}}>
                  <Nav>About</Nav></Link>
                  <NavDropdown
                    title="Seasons"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">2022</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">2021</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">~ 2020</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button 
                  className="nav-tab"
                  variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}
export default Header;