import React from "react"
import ReactDOM from "react-dom"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import Contact from "./Contact"
import { Link } from "gatsby"

const checkScreenWidthMobile = () => {
  if (typeof window !== `undefined`) {
    return window.screen.width < 1024 ? true : false
  }
}

const desktopButton = (
  <button
    className="popupWindowLinkButton"
    style={{ cursor: "pointer" }}
    onClick={() => {
      const win = new WinBox({
        title: "Contact me",
        width: "80%",
        height: "80%",
        x: "center",
        y: "center",
        onfocus: function () {
          this.removeClass("wb-no-focus")
          this.addClass("wb-focus")
        },
        onblur: function () {
          this.removeClass("wb-focus")
          this.addClass("wb-no-focus")
        },
      })

      ReactDOM.render(
        React.createElement(Contact, {
          close: () => win.close(),
        }),
        win.body
      )
    }}
  >
    Contact
  </button>
)

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <div style={{ margin: "auto" }}>
        <Link to="/">Home</Link> {" | "}
        <a
          href="https://github.com/metaplex-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://docs.google.com/document/d/1eSI4hqKZeAk7HGIgUNK7AGzA1HywSgQO/edit?usp=sharing&ouid=105918931425761106702&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" | "} Terms and Conditions
        </a>
      </div>
      <span
        style={{
          margin: "auto",
          fontSize: "xx-small",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        Forked from <a href="https://github.com/Kielx/terminal-portfolio">terminal-portfolio</a> by Krzysztof Pantak {" | "} Source code
        distributed under MIT License
      </span>
    </footer>
  )
}

export default Footer
