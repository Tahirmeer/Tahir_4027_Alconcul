import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" style={{color:"navy",fontFamily:"sans-serif"}} href="#">AlConsul</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="Home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="AboutUs">AboutUs</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link " to="ContactUs" id="navbarDropdown" role="button">
          ContactUs
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="Signup" tabindex="-1">Signup</Link>
      </li>
      <li class="nav-item">
      <Link to="Login" class="nav-link" >Login</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar