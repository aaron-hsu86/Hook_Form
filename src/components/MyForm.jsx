import React, {useState} from 'react'

const MyForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const submitForm = e => {
        e.preventDefault();

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }


    const handleChange = e => {
        const {name, value} = e.target

        setFormData( (currentData) => ({...currentData, [name]: value}))



    }

    return (
        <>
            <form onSubmit={submitForm}>
                <fieldset>
                    <div>
                        <label>First Name:</label>
                        <input type='text' onChange={handleChange} name='firstName' value={formData.firstName}/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type='text' onChange={handleChange} name='lastName' value={formData.lastName}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type='text' onChange={handleChange} name='email' value={formData.email}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='text' onChange={handleChange} name='password' value={formData.password}/>
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type='text' onChange={handleChange} name='confirmPassword' value={formData.confirmPassword}/>
                    </div>
                </fieldset>
                <p>Your form Data</p>
                <div>
                    <p>First Name: {formData.firstName}</p>
                    <p>Last Name: {formData.lastName}</p>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                    <p>Confirm Password: {formData.confirmPassword}</p>
                </div>

            </form>
        </>
    )
}

export default MyForm