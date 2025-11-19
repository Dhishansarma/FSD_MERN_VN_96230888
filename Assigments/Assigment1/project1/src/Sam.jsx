import React from "react";

function Sam() {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none justify-content-around"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 16 16">
  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"/>
  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"/>
</svg>
{" "}
            <span className="fs-4">Simple header</span>{" "}
          </a>{" "}
          <ul className="nav nav-pills">
            {" "}
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link">
                Features
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link">
                FAQs
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>{" "}
          </ul>{" "}
        </header>{" "}
      </div>
    </div>
  );
}

export default Sam;
