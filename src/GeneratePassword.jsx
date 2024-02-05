import "./App.css";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { GiRegeneration } from "react-icons/gi";
import { FaCopy } from "react-icons/fa";

const GeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const length = 12;
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghiklmnopqrstuvwxyz";
  const number = "1234567890";
  const symbol = " @#$%^&*()_+~|}{[]></-=";

  const allChars = upperCase + lowerCase + number + symbol;

  function generatesPassword() {
    let generate = "";
    while (length > generate.length) {
      generate += allChars[Math.floor(Math.random() * allChars.length)];
    }
    console.log(generate);
    setPassword(generate);

    setInputPassword(generate);
  }

  const handle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <h1>
          Generate a <br />
          Random Password
        </h1>

        <div className="display">
          <input
            type="text"
            id="password"
            placeholder="Password"
            value={inputPassword}
            onChange={handle}
          />
          <button onClick={() => navigator.clipboard.writeText(inputPassword)}>
            <FaCopy />
          </button>
        </div>
        <button onClick={() => generatesPassword()}>
          <GiRegeneration /> {"Generate Password"}
        </button>
      </div>
    </>
  );
};

export default GeneratePassword;
