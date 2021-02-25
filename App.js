import React from "react";
import "./styles.css";

export default function App() {
 
  const [klik, setKlik] = React.useState(0);
  return (
    <main>
      {" "}
      <div class="header">
        {" "}
        <h1>Dzikir Counter</h1>{" "}
        <p>
           Made with &hearts; by{" "}
          <a href="https://instagram.com/annisa_pussa">Annisa Puspitasari</a>{" "}
        </p>{" "}
      </div>{" "}
      <div class="container">
        {" "}
        <div class="home">{klik}</div>{" "}
        <div class="aksi">
          <button class="myButton" onClick={() => setKlik(klik + 1)}>
            Hitung
          </button>
          <div class="lain">
            <button onClick={() => setKlik(klik - 1)}>Salah</button>{" "}
            <button onClick={() => setKlik(klik * 0)}>Ulang</button>
          </div>
        </div>
      </div>{" "}
    </main>
  );
}
