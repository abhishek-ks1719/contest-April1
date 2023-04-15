import React from 'react'
import { useState } from 'react'
import Input from './Input';

const Form = () => {

    const [form, setForm] = useState({
        firstName: "",
        lastName:"",
        password: "",
        confirmPassword: ""
      });
      const [validation, setValidation] = useState("");

      const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
      };

      const handleClick = () =>{
        const {firstName,lastName,password,confirmPassword} = form;
        if(firstName==="" || lastName === "" || password === "" || confirmPassword === "")
            setValidation('Error:All fields are mandatory with valid input')
        else if(password !== confirmPassword)
            setValidation('Error: Password mismatch')
        else if(
         firstName.length>=3 &&
         lastName.length>=3 &&
         password.length>=8 &&
         confirmPassword===form.password)
            setValidation('Sign up Success')

        setForm({
          firstName: "",
          lastName:"",
          password: "",
          confirmPassword: ""
        });
      }
  return (
    <div className='Form'>
        <Input
          label="First Name"
          type="text"
          name="firstName"
          value={form.firstName}
          onClick={handleChange}
        
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          value={form.lastName}
          onClick={handleChange}
        
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onClick={handleChange}
        
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onClick={handleChange}
        />
        {(validation.startsWith('Sign'))
        ?<p style={{color:'green'}}>{validation}</p>
        :<p style={{color:'Red'}}>{validation}</p>}
        <button onClick={handleClick}>Sign up</button>
    </div>
  )
}

export default Form