import React from 'react'

export const NavItems = (props) => {
  return (
<Navbar bg="light" expand="lg">
      <Container>
      <NavDropdown title="ALL CATEGORIES" ClassName="cat" id="basic-nav-dropdown">ALL CATEGORIES</NavDropdown>
        {/* <Navbar.Brand href="#home" className="text-primary cat-text">ALL CATEGORIES</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown   title="Events"
              className="pr-2 py-2 align-text-top"
              id="basic-nav-dropdown"
              style={{width:'100%'}}
              show={shownav}
              onMouseEnter={showDropdown} 
              onMouseLeave={hideDropdown}
                        >

            {/* <NavDropdown.Item href="#action/3.1" className="dropdown-menu"> */}
            <div class="container-fluid" style={{backgroundColor:'red',width:'100%',marginTop:'-75px'}}>
    <div class="row my-4">
      <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
        <div class="list-group list-group-flush">
          <a href="" class="list-group-item list-group-item-action">Lorem ipsum</a>
          <a href="" class="list-group-item list-group-item-action">Dolor sit</a>
          <a href="" class="list-group-item list-group-item-action">Amet consectetur</a>
          <a href="" class="list-group-item list-group-item-action">Cras justo odio</a>
          <a href="" class="list-group-item list-group-item-action">Adipisicing elit</a>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
        <div class="list-group list-group-flush">
          <a href="" class="list-group-item list-group-item-action">Explicabo voluptas</a>
          <a href="" class="list-group-item list-group-item-action">Perspiciatis quo</a>
          <a href="" class="list-group-item list-group-item-action">Cras justo odio</a>
          <a href="" class="list-group-item list-group-item-action">Laudantium maiores</a>
          <a href="" class="list-group-item list-group-item-action">Provident dolor</a>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
        <div class="list-group list-group-flush">
          <a href="" class="list-group-item list-group-item-action">Iste quaerato</a>
          <a href="" class="list-group-item list-group-item-action">Cras justo odio</a>
          <a href="" class="list-group-item list-group-item-action">Est iure</a>
          <a href="" class="list-group-item list-group-item-action">Praesentium</a>
          <a href="" class="list-group-item list-group-item-action">Laboriosam</a>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="list-group list-group-flush">
          <a href="" class="list-group-item list-group-item-action">Cras justo odio</a>
          <a href="" class="list-group-item list-group-item-action">Saepe</a>
          <a href="" class="list-group-item list-group-item-action">Vel alias</a>
          <a href="" class="list-group-item list-group-item-action">Sunt doloribus</a>
          <a href="" class="list-group-item list-group-item-action">Cum dolores</a>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="list-group list-group-flush">
          <a href="" class="list-group-item list-group-item-action">Cras justo odio</a>
          <a href="" class="list-group-item list-group-item-action">Saepe</a>
          <a href="" class="list-group-item list-group-item-action">Vel alias</a>
          <a href="" class="list-group-item list-group-item-action">Sunt doloribus</a>
          <a href="" class="list-group-item list-group-item-action">Cum dolores</a>
        </div>
      </div>
    </div>
  </div>
                          
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
