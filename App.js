import React from "react";
import "./styles.css";
export default function App() {
  const [klik, setKlik] = React.useState(0);
  return (
    <main>
      {" "}
      <div class="header">
        {" "}
        <h1>Penghitung Dzikiran</h1>{" "}
        <p>Aplikasi Praktis Tanpa harus Download</p>{" "}
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
      <div class="footer">
        {" "}
        <p>
          by{" "}
          <a href="https://nisacodelifings.netlify.com/">Annisa Puspitasari</a> built with HTML5, CSS3, React & Netlify
        </p>{" "}
      </div>{" "}
    </main>
  );
}
