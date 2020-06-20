import React, { useEffect } from 'react';
import {
    Link,
} from "react-router-dom";
import M from 'materialize-css'



const Navbar = (props) => {
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            var elems = document.querySelectorAll(".sidenav");
            var instances = M.Sidenav.init(elems);
        });
    }, []);
   
    return ( 
        <>
            <nav className="navbar-fixed">
                <nav className="nav-extended  indigo darken-4">
                  <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Logo</a>
                            <span data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></span>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/" href="sass.html">Home</Link></li>
                                <li><Link to="/blog" href="badges.html">Blog</Link></li>
                                <li><Link to="/portfolio" href="collapsible.html">Portfolio</Link></li>
                            </ul>
                        </div>
                  </div>
                </nav>
            </nav>

            <ul className="sidenav  indigo darken-4" id="mobile-demo">
                <li><Link to="/" href="sass.html">Home</Link></li>
                <li><Link to="/blog" href="badges.html">Blog</Link></li>
                <li><Link to="/portfolio" href="collapsible.html">Portfolio</Link></li>
            </ul>
        </>
     );
}
 
export default Navbar;