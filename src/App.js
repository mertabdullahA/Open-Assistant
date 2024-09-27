import React, { useState } from 'react';
import './App.css';

function App() {

  const [newYenilist, setyenilist] = useState("");
  const [listeler, setliste] = useState([]);



  function addliste() {


    if (!newYenilist) {
      alert("birşey girin");
      return;
    }

    const liste = {

      id: Math.floor(Math.random() * 1000),
      value: newYenilist
    }
    setliste(olditem => [...olditem, liste])
    setyenilist("");
  }

  return (
    <div className="App">

      <h1>To-do List</h1>


      <input type="text" placeholder="yeni görev"
        value={newYenilist}
        onChange={e => setyenilist(e.target.value)}

      ></input>
      <button onClick={() => addliste()}>Ekle</button>
      <ul>
        {listeler.map(liste => (
          <li key={liste.id}>{liste.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
