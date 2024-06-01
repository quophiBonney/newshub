import React, { useState } from "react";
const Signup = () => {
  const [btnCaption, setBtnCaption] = useState("");
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="mr-1 ml-1">
            <form>
              <div className="input-form mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control p-3 w-100"
                />
              </div>
              <div className="input-form mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control p-3 w-100"
                />
              </div>
              <div className="input-form mb-3">
                <input
                  type="password"
                  placeholder="password"
                  className="form-control p-3 w-100"
                />
              </div>
              <div className="input-form">
                <input
                  type="button"
                  value={btnCaption ? "Signing Up..." : "Sign Up"}
                  className="form-control p-3 w-100 btn-signup text-light"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
