import { useState } from "react";
import IMCForm from "./components/IMCForm";
import IMCResult from "./components/IMCResult";
import "./App.css";

function App() {
  const [imc, setImc] = useState(null);

  const calcularIMC = (peso, altura) => {
    const resultado = peso / (altura * altura);
    setImc(resultado);
  };

  return (
    <main className="app-container">
      <section className="imc-card">
        <header className="app-header">
          <div className="header-icon">⚖️</div>
          <h1>Calculadora de IMC</h1>
          <p>Conoce tu Índice de Masa Corporal</p>
        </header>

        <IMCForm onCalculate={calcularIMC} />

        <div className="result-section">
          <IMCResult imc={imc} />
        </div>

        <footer className="app-footer">
          <p>Calculadora de IMC · Proyecto desarrollado con React</p>
        </footer>
      </section>
    </main>
  );
}

export default App;