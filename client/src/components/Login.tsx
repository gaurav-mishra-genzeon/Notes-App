import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });


  const getdata = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password } = inpval;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter valid email Address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length should be greater than five");
    } else {
      try {
        const res = await axios.post(`http://localhost:3001/api/login`, inpval);
        if (res.data) {
          localStorage.setItem("token", res.data.token);
          // console.log(res.data.token)
          // setToken?.(res.data.token);
          setTimeout(() => {
            alert("login successful");
          }, 500);

          setTimeout(() => {
            history("/dashboard");
          }, 1000);
        } else {
          alert("error logging in");
        }
      } catch (e) {
        console.log(e);
        alert("error logging in");
      }

      // if (getuserArr && getuserArr.length) {
      //     const userdata = JSON.parse(getuserArr)
      //     //console.log(userdata);
      //     const userlogin = userdata.filter((el: any, k: any) => {
      //         return el.email === email && el.password === password
      //     });
      //     // console.log(userlogin);
      //     if (userlogin.length === 0) {
      //         alert("invalid details!! please enter valid details")
      //     } else {
      //         console.log("user login successfully");
      //         localStorage.setItem("user_login", JSON.stringify(getuserArr))
      //         history("/dashboard")
      //     }
      // }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">LOGIN</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
             Go back to <NavLink to="/">Signup</NavLink> page  
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
