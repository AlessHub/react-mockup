import React from 'react'

function Form() {
  return (
    <>
        <form className='registerForm'>
            <label className="formLabel" for="fname">Name:</label>
            <input className='formInput' type="text" id="fname" name="fname"></input>
            <label className="formLabel" for="lname">Email:</label>
            <input className='formInput' type="text" id="lname" name="lname"></input>
            <label className="formLabel" for="lname">Password:</label>
            <input className='formInput' type="text" id="lname" name="lname"></input>
            <input className="submitButton" type="submit" value="Join now"></input>
        </form>
    </>
  )
}

export default Form