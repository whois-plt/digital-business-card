import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div className="card-wrapper">
    <Header />
    <div className="about-and-interests-wrapper">
      <About />
      <Interests />
    </div>
    <Footer />
  </div>
)
