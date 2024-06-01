import React, { useState } from "react";

const Login = () => {
  const [btnLoginCaption, setLoginCaption] = useState("");
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="mr-1 ml-1">
            <form>
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
                  value={btnLoginCaption ? "Loging in..." : "Login"}
                  className="form-control p-3 w-100 btn-login text-light"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
