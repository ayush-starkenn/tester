import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveSignupInfo = async () => {
    const response = await axios.post("http://localhost:3001/signup", {
      email: email,
      password: password,
    });
    console.log(response);
    navigate(`/details/${response.data._id}`);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="email"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={saveSignupInfo}>Signup</button>
    </div>
  );
}

export default Signup;
