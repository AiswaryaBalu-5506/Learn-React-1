import {useFormik} from 'formik'
import React from 'react'

const ValidateEmployee = (empData) => {
    const errors = {}

    if(!empData.name){
        errors.name = "Please enter Employee Name!" 
    }
    
    if(empData.name.length > 20){
        errors.name = "Name should not exceed 20 characters"
    }

    if(!empData.emailid){
        errors.emailid = "Please enter email ID"
    }

    if(! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(empData.emailid)){
        errors.emailid = "Invalid email address"
    }

    return errors;
}

function FormValidationFormik() {

    const formik = useFormik({
        initialValues:{
            id: null,
            name: '',
            salary: null,
            department: '',
            emailid: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
        validate: ValidateEmployee
    })

    return (
        <div>
            <div>
                <h3> NEW EMPLOYEE FORM </h3>
                <form onSubmit={formik.handleSubmit}>

                <label> Id: </label>
                <input type="text" name="id" value={formik.values.id} onChange={formik.handleChange} />  <br />

                <label> Name: </label>
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>  <br />
                {formik.touched.name && formik.errors.name ? <span style={{color: 'red'}}>{formik.errors.name}</span> : null}

                <label> Salary: </label>
                <input type="text" name="salary" value={formik.values.salary} onChange={formik.handleChange} />  <br />

                <label> Department: </label>
                <input type="text" name="department" value={formik.values.department} onChange={formik.handleChange} />  <br />

                <label> EmailId: </label>
                <input type="email" name="emailid" value={formik.values.emailid} onChange={formik.handleChange} />  <br />
                {formik.touched.emailid && formik.errors.emailid ? <span style={{color: 'red'}}>{formik.errors.emailid}</span> : null}

                <button type="submit"> SUBMIT </button>
                </form>                
            </div>
        </div>
    )
}

export default FormValidationFormik

