import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Sign_img from './Sign_img'
import { NavLink } from 'react-router-dom'

const Homes = () => {

    const [inpval, setInpval] = useState({
        firstName: "",
        lastName: "",
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

        const { firstName, lastName, email, password } = inpval;

        if (firstName === "") {
            alert("firstName field is required")
        } else if (lastName === "") {
            alert("lastName field is required")
        }
        else if (email === "") {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("please enter valid email Address")
        } else if (password === "") {
            alert("password field is required")
        } else if (password.length < 5) {
            alert("password length should be greater than five")
        } else {
            console.log("data added successfully");

            localStorage.setItem("user", JSON.stringify([...data, inpval]))
        }
    }
    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Registration</h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicfistName">

                                <Form.Control type="text" name='firstName' onChange={getdata} placeholder="Enter your firstName" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasiclastName">

                                <Form.Control type="text" name='lastName' onChange={getdata} placeholder="Enter your lastName" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            {/* Button:{ value: string };
                            <div>
                                <input type="submit" value="submit" />
                            </div> */}

                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }}>Submit</Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account? <span><NavLink to="/login">LOGIN</NavLink></span></p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>
    )
}

export default Homes
