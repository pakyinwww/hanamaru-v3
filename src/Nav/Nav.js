import React from "react"
import "./Nav.css"

function Nav() {
    return (
        <div className="nav-container">
<div className="nav-logo">
            <button type="button" onClick={() => store.scrollTo("nav")}>
              <img
                className="nav-title"
                alt="花丸日本語教室"
                src={navTitleImg}
              />
            </button>
          </div>
          <button
            type="button"
            className="nav-menu vmiddle"
            onClick={() => toggleMenu(!toggleState)}
          >
            目錄
            <span className="gap-5px vmiddle">
              <i className="lni-menu size-md vmiddle" />
            </span>
          </button>
          <ul
            id="nav-list"
            className={`nav-list ${toggleState ? "" : "nav-list-expand"}`}
          >
            <li>
              <button type="button" onClick={() => store.scrollTo("about")}>
                關於我們
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => store.scrollTo("qualification")}
              >
                導師資歷
              </button>
            </li>
            <li>
              <button type="button" onClick={() => store.scrollTo("course")}>
                課程資料
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => store.scrollTo("transportation")}
              >
                前往方法
              </button>
            </li>
            <li>
              <button type="button" onClick={() => store.scrollTo("contact")}>
                聯絡我們
              </button>
            </li>
          </ul>
        </div>
    )
}

export default Nav