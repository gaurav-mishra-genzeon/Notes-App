import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Sign_img from './Sign_img'
import { log } from 'console'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })
    // define state for store data in local storage
    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (event: React.ChangeEvent<HTMLInputElement>) => {
        //  console.log(event.target.value);
        // console.log(event.target);

        const { value, name } = event.target;
        //console.log(value, name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }

        })


    };

    const addData = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("user")
        console.log(getuserArr);


        const { email, password } = inpval;

        if (email === "") {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("please enter valid email Address")
        } else if (password === "") {
            alert("password field is required")
        } else if (password.length < 5) {
            alert("password length should be greater than five")
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr)
                //console.log(userdata);
                const userlogin = userdata.filter((el: any, k: any) => {
                    return el.email === email && el.password === password
                });
                // console.log(userlogin);
                if (userlogin.length === 0) {
                    alert("invalid details!! please enter valid details")
                } else {
                    console.log("user login successfully");
                    localStorage.setItem("user_login", JSON.stringify(getuserArr))
                    history("/dashboard")
                }
            }
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>LOGIN</h3>
                        <Form>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>


                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }}>Submit</Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>Login</span></p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>
    )
}

export default Login
