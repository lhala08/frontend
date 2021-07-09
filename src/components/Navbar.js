import { Navbar, Nav, Container } from "react-bootstrap";
//function to
export default function NavBar(){
  return(
   
      <Navbar expand="lg" variant="light" bg="light">
			  <Container>
			     <Navbar.Brand >PDLMS</Navbar.Brand>
			     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
				 <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto"></Nav>
				 </Navbar.Collapse>   
			  </Container>	    
   	  </Navbar>	
  )
}