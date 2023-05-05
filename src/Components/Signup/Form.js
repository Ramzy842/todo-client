import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [usernameErr, setUsernameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [passwordConfirmationErr, setPasswordConfirmationErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password && passwordConfirmation) {
      console.log("information Entered!\n");
    } else if (!username && !email && !password && !passwordConfirmation) {
      setEmailErr("Please enter a valid email");
      setUsernameErr("Please enter a username");
      setPasswordErr("Please enter a password");
      setPasswordConfirmationErr("Please confirm your password");
    } else if (!username) {
      setEmailErr("");
      setUsernameErr("Please enter a username");
      setPasswordErr("");
      setPasswordConfirmationErr("");
    } else if (!email) {
      setEmailErr("Please enter a valid email");
      setUsernameErr("");
      setPasswordErr("");
      setPasswordConfirmationErr("");
    } else if (!password) {
      setEmailErr("");
      setUsernameErr("");
      setPasswordErr("Please enter a password");
      setPasswordConfirmationErr("");
    } else {
      setEmailErr("");
      setUsernameErr("");
      setPasswordErr("");
      setPasswordConfirmationErr("Please confirm your password");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      className="h-1/2 w-1/2 max-w-6xl m-auto flex items-center gap-x-4 "
    >
      <div className="w-1/3 h-12">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="h-12 outline-gray-300 rounded-sm pl-2 font-medium"
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameErr && <p className="text-red-500">{usernameErr}</p>}
      </div>
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
      <div className="w-1/3 h-12">
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm password"
          className=" h-12 outline-gray-300 rounded-md pl-2 font-medium"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        {passwordConfirmationErr && (
          <p className="text-red-500">{passwordConfirmationErr}</p>
        )}
      </div>
      <button
        className="rounded-full border-2 flex justify-center items-center p-2 px-4 hover:bg-black hover:text-white font-semibold"
        type="submit"
      >
        Signup
      </button>
    </form>
  );
};

export default Form;
