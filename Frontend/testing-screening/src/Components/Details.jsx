import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [disability, setDisability] = useState("");
  const { uuid } = useParams();

  const saveDetails = async () => {
    console.log({
      name: name,
      gender: gender,
      disability: disability,
      uuid: uuid,
    });
    const response = await axios.post("http://localhost:3001/details", {
      name: name,
      gender: gender,
      disability: disability,
      uuid: uuid,
    });

    console.log(response);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <select>
        <option value="male" onClick={() => setGender("male")}>
          Male
        </option>
        <option value="female" onClick={() => setGender("female")}>
          Female
        </option>
        <option value="others" onClick={() => setGender("others")}>
          Others
        </option>
      </select>
      <h1>Disability</h1>
      <input
        type="radio"
        name="dis"
        onClick={(e) => {
          setDisability("yes");
        }}
      ></input>
      <label>Yes</label>
      <input
        type="radio"
        name="dis"
        onClick={(e) => setDisability("no")}
      ></input>
      <label>No</label>
      <br />
      <br />
      <button onClick={saveDetails}>Save</button>
    </div>
  );
}

export default Details;
