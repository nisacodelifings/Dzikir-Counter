import React from "react";

export default function Main() {
  const [klik, setKlik] = React.useState(0);
  return (
    <div className="klikan px-8 pt-8 ml-5">
      <main className="text-6xl text-blue-200 ml-24">{klik}</main>
     <div className="ml-16">
     <button
        className="w-32 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        onClick={() => setKlik(klik + 1)}
      >
        Hitung
      </button><br />
      <button
        onClick={() => setKlik(klik - 1)}
        className="w-32 mt-3 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      >
        Salah
      </button> <br />
      <button
        onClick={() => setKlik(klik * 0)}
        className="w-32 mt-3 bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-700 rounded"
      >
        Ulang
      </button>
       </div>
    </div>
  );
}
