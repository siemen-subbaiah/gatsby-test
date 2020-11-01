import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { useState } from "react"
import { data } from "../../navitems"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const [items] = useState(data)

  return (
    <nav>
      <div className="navbar navbar-expand-sm text-white bg-theme">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="" width="40px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setToggle(!toggle)}
        >
          <span className="text-white">menu</span>
        </button>
        <div
          className={
            toggle
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
        >
          <ul className="navbar-nav ml-auto mr-5">
            {items.map(item => {
              return (
                <li className="nav-item" key={item.id}>
                  <Link className="nav-link text-white" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
