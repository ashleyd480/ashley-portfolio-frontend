import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="nav sticky-top">
      <Navbar.Brand as={Link} to="/">
      <img
          src={"src/assets/cartoon-cat.png"}
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="full-width flex-column align-items-start space-between"
      >
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <strong>Welcome 🐾</strong>
          </Nav.Link>{" "}
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="about/the-who">
              The Who
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="about/the-why">
              The Why
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="about/experience">
              Experience
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Work" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="work/projects">
              Projects
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="work/teachbacks">
              Teachbacks
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="work/blog">
              Dev Blog
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="KPIs" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="kpis/ga-scores">
              GA Scores
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="kpis/project-scores">
              Project Scores
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="kpis/feedback">
              Feedback
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="kpis/self-eval">
              Self Eval
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Hobbies" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="hobbies/google-maps">
              Google Maps
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="hobbies/crowdsource-ai">
              Crowdsource AI
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
