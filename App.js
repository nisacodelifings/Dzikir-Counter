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
        <p>A FREE, Simple and Progressive Web App for Dzikrullah</p>{" "}
      </div>{" "}
      <div class="container">
        {" "}
        <div class="home">{klik}</div>{" "}
        <div class="aksi">
          <button class="hitung" onClick={() => setKlik(klik + 1)}>Hitung</button>{" "}
          <button onClick={() => setKlik(klik - 1)}>Salah</button>{" "}
          <button onClick={() => setKlik(klik * 0)}>Ulang</button>
        </div>
      </div>{" "}
      <div class="footer">
        {" "}
        <p>
          by{" "}
          <a href="https://nisacodelifings.netlify.com/">Annisa Puspitasari</a>
        </p>{" "}
      </div>{" "}
    </main>
  );
}
