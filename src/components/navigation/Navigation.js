import React, { useContext} from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import Button from "../button/Button";



function Navigation() {

 const {isAuth, user, logout} = useContext(AuthContext);
 console.log(isAuth)


  return (
      <nav>
        <div className="nav-box">
          <h4>The Lady Mayonnaise</h4>

          <ul>
            <li>
              <NavLink
                  className={({ isActive }) => isActive === true ? 'active-menu-link' : 'default-menu-link'} to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                  className={({ isActive }) => isActive === true? 'active-menu-link' : 'default-menu-link'} to="/ClothingLibrary"
              >
                Library
              </NavLink>
            </li>

            <li>
              <NavLink
                  className={({ isActive }) => isActive === true ? 'active-menu-link' : 'default-menu-link'} to="/Blog"
              >
                Blog
              </NavLink>
            </li>





              {!isAuth?
                  <>

            <li>
              <NavLink
                  className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/Login">
                Login
              </NavLink>
            </li>


            </>
                  :<>

                  <span>{user.username}</span>

                  <Button
                      type="button" onClick={logout}>
                    Log out
                  </Button>
                      <li>
                          <NavLink
                              className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/Account"
                          >
                              Account
                          </NavLink>
                          -
                          <NavLink
                              className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/Admin"
                          >
                              Admin
                          </NavLink>
                      </li>



                </>


            }


        </ul>


        </div>
      </nav>
  );
}

export default Navigation;