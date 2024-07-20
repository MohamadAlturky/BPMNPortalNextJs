import Image from "next/image";
import logo from "../../public/logo.svg";
export default function Header() {
  return (
    <>
      <nav className="jsx-3906283848 menu-nav">
        <div className="logo-container">
          <Image
            width={30.4}
            height={30.4}
            alt="Your Avatar"
            src={logo}
            draggable="false"
            className="logo-something"
          />
          {/* <h1 className="jsx-3906283848 menu-nav__title">donut</h1> */}

          {/* <span className="logo-tail">
            📌 if you fail to plan, you plan to fail.
          </span> */}
        </div>
        <div className="jsx-3906283848">
          <button
            type="button"
            aria-label="Toggle Dark mode"
            className="jsx-1470089603 btn theme-button"
          >
            <div className="text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
          </button>
          <div className="jsx-418573366 tooltip ">
            <button className="jsx-3906283848 user-settings__button">
              <span className="jsx-1545067541 avatar ">
                <span className="jsx-1545067541 avatar-text">OA</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
