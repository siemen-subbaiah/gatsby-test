import { FaCartArrowDown } from "react-icons/fa"
import React from "react"

export const data = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Services", url: "/services" },
  { id: 4, title: "Contact", url: "/contact" },
  { id: 5, title: <FaCartArrowDown className="cart-icon" />, url: "/cart" },
]
