import "./Navbar.css";
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from "react";

export default function Header(){
  const [navBg, setNavBg] = useState(false);

  function changeNavBg(){
    window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

  const navClass = navBg? " light-bg-transition" : " transperant-bg-transition";

  return (
      <Nav class={'navbar navbar-expand-lg navbar-light fixed-top' + navClass}
      style={{maxWidth: '100vw'}}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#" style={{color:"white"}}>Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link-text nav-link active" aria-current="page" href="#" style={{color:"white", fontSize: '1.2em'}}>Home</a>
            <a class="nav-link-text nav-link nav-link-text" href="#" style={{color:"white", fontSize: '1.2em'}}>sdasdsa</a>
            <a class="nav-link-text nav-link nav-link-text" href="#" style={{color:"white", fontSize: '1.2em'}}>Pricing</a>
          
          </div>
        </div>
      </div>
    </Nav>
    );
}