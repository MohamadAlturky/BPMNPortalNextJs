"use client";
import React, { useState, useEffect } from "react";

export default function Links() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () =>
      setSticky(document.documentElement.scrollTop > 54);
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [setSticky]);

  return (
    <>
      <nav className="jsx-637727504 submenu__wrapper">
        <div
          className={`jsx-637727504 submenu ${sticky ? "submenu_sticky" : ""}`}
        >
          <div className="jsx-637727504 submenu__inner">
            <div className="jsx-1486330690 tabs ">
              <header className="jsx-1486330690">
                <div className="jsx-1486330690 scroll-container ">
                  <div role="button" className="jsx-2254484821 tab active ">
                    Overview
                  </div>
                  <div role="button" className="jsx-2254484821 tab  ">
                    Projects
                  </div>
                  <div role="button" className="jsx-2254484821 tab  ">
                    Integrations
                  </div>
                  <div role="button" className="jsx-2254484821 tab  ">
                    Activity
                  </div>
                  <div role="button" className="jsx-2254484821 tab  ">
                    Domains
                  </div>
                  <div role="button" className="jsx-2254484821 tab  ">
                    Usage
                  </div>
                  <div role="button" className="jsx-2254484821 tab  ">
                    Settings
                  </div>
                </div>
              </header>
              <div className="jsx-1486330690 content"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
