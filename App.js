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
        <p>
          A Free and Progressive Web App Made with &hearts; by{" "}
          <a href="https://nisacodelifings.netlify.com/">Annisa Puspitasari</a>{" "}
          using HTML5, CSS3, & React
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
      <div class="footer">
        {" "}
        <h2>Thanks for Using!</h2> <p>dibuat di Bandung, Indonesia</p>
        <p>
          Feedback ke ig <a href="https://instagram.com/nscdlgg">@nscdlgg</a>
        </p>
      </div>{" "}
    </main>
  );
}
