import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [imc, setImc] = useState("");

  function calcularImc() {
    if (peso === "" || altura === "") {
      alert("Digite Peso e Altura");
      return;
    }
    
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setMensagem("Você está abaixo do peso! seu IMC: " + imc.toFixed(2));
      setImc("blue");
    } else if (imc > 18.5 && imc < 25) {
      setMensagem("Voce está com peso normal! seu IMC: " + imc.toFixed(2));
      setImc("green");
    } else if (imc > 25 && imc < 30) {
      setMensagem("Você está com sobrepeso! seu IMC: " + imc.toFixed(2));
      setImc("yellow");
    } else if (imc > 30 && imc < 40) {
      setMensagem("Você está com obesidade! seu IMC: " + imc.toFixed(2));
      setImc("orange");
    } else if (imc > 40) {
      setMensagem("Você está com obesidade grave! seu IMC: " + imc.toFixed(2));
      setImc("red");
    }
  }

  return (
    <div className="app">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <h1>Calculadora IMC</h1>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 80"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularImc}>Calcular</button>
      </div>

      <div
        className={`
        h2
        ${imc === "blue" && "h2__blue"}
        ${imc === "green" && "h2__green"}
        ${imc === "yellow" && "h2__yellow"}
        ${imc === "orange" && "h2__orange"}
        ${imc === "red" && "h2__red"}
      `}
      >
        <h2>{mensagem}</h2>
      </div>

    </div>
  );
}

export default App;
