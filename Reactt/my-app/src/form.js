import React, {useState, useEffect} from "react";
import { Formik } from "formik";
import userSchema from "./formValidation";
import { userAdd } from "./api";
import formCss from "./CSS/form.css"

const Form = ({test}) => {
const [success, setSuccess] = useState(false);



useEffect(()=>{
if(success){
  setTimeout(()=>{
    setSuccess(false);
  }, 3000)
}
}, [success]);





return (
  <div id="bg">

<div id="general">

<div id="one">
  <h1>SIGN UP</h1>
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    
    validationSchema={userSchema}
    onSubmit={ async (values, actions) => {
      let result = await userAdd(values);
      test(result);
      actions.setSubmitting(true);
      setSuccess(true);
    }}
  >

    {(props) =>  (
     <div className="col-6 offset-3">
       <form className={props.isSubmitting === false && success === false ? "block" : "none"} onSubmit={props.handleSubmit}>
        <input
         id="inp1"
          type="email"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
          name="email"
          className={`form-control ${props.errors.email == undefined ? "" : "is-invalid" }  `}

        />
        {props.errors.email && <div id="feedback">{props.errors.email}</div>}
        <br />
        <br />

        <input
        id="inp"
          type="password"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.password}
          name="password"
          className={`form-control ${props.errors.password == undefined ? "" : "is-invalid" }  `}
        />
        {props.errors.password && (
          <div id="feedback">{props.errors.password}</div>
        )}
        <br />
        <br />
        <button className="fa-solid fa-eye-slash" id="hide" type="submit">Submit</button>
      </form>
      <div className={props.isSubmitting === true ? "block" : "none"} >
        sending...
      </div>
      <div className={success === true ? "block" : "none"} >
       Form Success
      </div>
     </div>
    )}


  </Formik>
</div>
  </div>
  </div>
)



};

export default Form;



