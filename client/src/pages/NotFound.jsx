import React from "react";
import notfoundsvg from "../assets/page_not_found.svg";
const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-12">
          <img src={notfoundsvg} className="img-fluid" alt="not found svg" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
