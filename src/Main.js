import React from "react";

export default function Main() {
  const [klik, setKlik] = React.useState(0);
  return (
    <div className="klikan ml-32 p-8">
      <main className="text-6xl text-blue-200">{klik}</main>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={() => setKlik(klik + 1)}
      >
        Hitung
      </button>
      <div className="reset ml-56 mb-2">
        <button
          onClick={() => setKlik(klik - 1)}
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        >
          Salah
        </button>
      </div>
      <div className="reset ml-56">
        <button
          onClick={() => setKlik(klik * 0)}
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        >
          Ulang
        </button>
      </div>
    </div>
  );
}
