import React from "react";

const Card = props => {
  return (
    <React.Fragment>
      <div
        className="row"
        style={{ padding: "10px", boxShadow: "0px 0px 6px black" }}
      >
        <div className="col-md-1" style={{ backgroundColor: "grey" }}></div>
        <div className="col-md-9">
          <label style={{ fontWeight: "bold", fontSize: "22px" }}>
            {props.heading}
          </label>
          <p>{props.description}</p>
        </div>
        <div className="col-md-2" style={{ fontSize: "10px" }}>
          <input type="radio" name="a" value="64-bit (x86)" />
          64-bit (x86)
          <br />
          <input type="radio" name="a" value="64-bit (x86)" />
          64-bit (ARM)
          <br />
          <input
            type="button"
            value="Select"
            className="btn btn-primary btn-block"
          />
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};

export default Card;
