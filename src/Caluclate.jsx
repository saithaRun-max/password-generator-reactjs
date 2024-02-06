import { useState } from "react";
import "./App.css";

const caluclate = () => {
  const [date, setDate] = useState("");
  const [data, setData] = useState({
  });

  const [status, setStatus] = useState(false)

  function caluclateAge() {
    let birthDate = new Date(date);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;


    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    function getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }

    setData({ ...data, y3: y3, m3: m3, d3: d3 });
    setStatus(true)
  }

  return (
    <div className="container">
      <div className="calculator">
        <h1>
          Javascript <br />
          <span>Age Calculator </span>
        </h1>
        <div className="input-box">
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) =>{ setDate(e.target.value); setStatus(false)}}
          />
          <button onClick={() => caluclateAge()}>Caluclate</button>
        </div>

       {
        ((!status) ? <p></p> :  <p>
        You are {data.y3} years, {data.m3} months and {data.d3} days old{" "}
      </p>)
       }
           
          
        
      </div>
    </div>
  );
};

export default caluclate;
