import React from "react"

const Header = () => {
  return (
    <>
      <div className="about-image-wrapper"></div>
      <div className="info-wrapper">
        <h1 className="about-name">Laszlo Papp</h1>
        <h3 className="about-title">Frontend Developer</h3>
        <a href="https://laszlopapp.dev/" className="about-website" target="_blank">
          laszlopapp.dev
        </a>
        <div className="buttons-wrapper">
          <a href="mailto:hello@laszlopapp.dev" className="button button-white">
            <i className="fa-solid fa-envelope"></i> Email
          </a>
          <a href="https://www.linkedin.com/in/tpapplaszlo/" className="button button-blue" target="_blank">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
