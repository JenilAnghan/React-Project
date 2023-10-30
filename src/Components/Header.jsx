import React from "react";

export default function Header() {
  let style = {
    height: "100px",
    widght: "100px",
    backgroundColor: "Black",
    color: "white",
  };
  return (
    <>
      <h1 className="text-danger text-decoration-line m-4 border border-black p-4 text-center">
        Header
      </h1>

      <h1 className="text-danger text-decoration-line m-4 border border-black p-4 text-center">
        Navigation Menu
      </h1>

      <h1 className="text-danger text-decoration-line m-4 border border-black p-4 text-center">
        <table className="d-flex">
          <div
            style={{
              display: "flex",
              height: "180px",
              width: "100vh",
              gap: "250px",
              textAlign: "center",
            }}
          >
            <h1 className="text-danger text-decoration-line m-4 border border-black p-4 text-center">
              Content
            </h1>

            <h1 className="text-danger text-decoration-line m-4 border border-black p-4 text-center">
              Main Content
            </h1>

            <h1 className="text-danger text-decoration-line m-4 border border-black p-4 text-center">
              Content
            </h1>
          </div>
        </table>
      </h1>
    </>
  );
}
