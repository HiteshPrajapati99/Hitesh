import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Birth, setBirth] = useState("");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 shadow border-0 mt-4">
            <div className="card-body">
              <Form>
                <h2 className="text-center">User Form</h2>
                <div className="form-group">
                  <label> Name </label>
                  <input
                    type="name"
                    id="name"
                    placeholder=" Enter Name"
                    className="form-control  shadow border-0"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div className="form-group mt-2">
                  <label> Date Of Birth </label>
                  <input
                    type="date"
                    id="name"
                    placeholder=" Last Name"
                    className="form-control shadow border-0"
                    value={Birth}
                    onChange={(e) => setBirth(e.target.value)}
                  />
                </div>

                <div className="form-group mt-2">
                  <label> Number </label>
                  <input
                    type="number"
                    id="number"
                    placeholder="Enter Your Number"
                    className="form-control shadow border-0"
                    value={Number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                <div className="form-group mt-2 ">
                  <label> Email </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="form-control shadow border-0"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className=" d-grid gap-2 ">
                  <Button
                    type="submit"
                    className="mt-3 shadow border-0"
                    variant="outline-success"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
