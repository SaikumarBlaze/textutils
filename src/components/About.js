import React from "react";
// import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div
          className="card pt-4 my-4"
          style={{
            width: "24rem",
            backgroundColor:
              props.theme !== 5
                ? props.textAreaBackgrounds[props.theme]
                : "white",
            color: props.theme !== 5 ? "white" : "black",
          }}
        >
          <img src="image.png" className="card-img-top" alt="TextUtils" />
          <div
            className={`card-body text-center text-${
              props.theme !== 5 ? "light" : "dark"
            }`}
          >
            <h5 className="card-title">Text Utils</h5>
            <p className="card-text">
              TextUtils is an utility which can be used to manipulate your text
              in the way you want.
            </p>
            <a
              href="#"
              className="btn btn-secondary"
              style={{
                backgroundColor:
                  props.theme !== 5
                    ? `${props.btnBackgrounds[props.theme]}`
                    : "",
                borderColor:
                  props.theme !== 5
                    ? `${props.btnBackgrounds[props.theme]}`
                    : "",
              }}
            >
              Go To TextUtils
            </a>
            {/* <Link
              to="/"
              className="btn btn-secondary"
              style={{
                backgroundColor:
                  props.theme !== 5
                    ? `${props.btnBackgrounds[props.theme]}`
                    : "",
                borderColor:
                  props.theme !== 5
                    ? `${props.btnBackgrounds[props.theme]}`
                    : "",
              }}
            >
              Go To TextUtils
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
