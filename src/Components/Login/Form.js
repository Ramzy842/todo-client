import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      //console.log("information Entered!");
      setEmailErr("");
      setPasswordErr("");
    } else if (!email && !password) {
      setEmailErr("Please enter a valid email");
      setPasswordErr("Please enter a password");
    } else if (!email) {
      setEmailErr("Please enter a valid email");
      setPasswordErr("");
    } else {
      setEmailErr("");
      setPasswordErr("Please enter a password");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      className="h-1/2 w-1/2 max-w-6xl m-auto flex items-center gap-x-4"
    >
      <div className="w-1/3 h-12">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="h-12 outline-gray-300 rounded-sm pl-2 font-medium"
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErr && <p className="text-red-500">{emailErr}</p>}
      </div>
      <div className="w-1/3 h-12">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className=" h-12 outline-gray-300 rounded-md pl-2 font-medium"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErr && <p className="text-red-500">{passwordErr}</p>}
      </div>
      <button
        className="rounded-full border-2 flex justify-center items-center p-2 px-4 hover:bg-black hover:text-white font-semibold"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Form;
