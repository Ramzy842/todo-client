import React from 'react'
import Form from '../Components/Signup/Form'

const Signup = () => {
  return (
    <div className="h-screen flex">
      <div className=" border-r-4 pt-80">
        <h1 className="-rotate-90  text-3xl font-bold">Signup</h1>
      </div>
      <Form />
    </div>
  )
}

export default Signup