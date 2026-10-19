import { useState } from "react";

function IMCForm({ onCalculate }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (peso.trim() === "" || altura.trim() === "") {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const pesoNum = Number(peso);
    const alturaNum = Number(altura);

    if (
      !Number.isFinite(pesoNum) ||
      !Number.isFinite(alturaNum) ||
      pesoNum <= 0 ||
      alturaNum <= 0
    ) {
      setError("El peso y la altura deben ser números mayores que cero.");
      return;
    }

    setError("");
    onCalculate(pesoNum, alturaNum);
  };

  return (
    <form className="imc-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="peso">Peso (kg)</label>
        <input
          id="peso"
          type="number"
          min="0"
          step="any"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
          placeholder="Ej. 70"
          aria-describedby={error ? "error-mensaje" : undefined}
        />
      </div>

      <div className="form-group">
        <label htmlFor="altura">Altura (metros)</label>
        <input
          id="altura"
          type="number"
          min="0"
          step="any"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
          placeholder="Ej. 1.75"
          aria-describedby={error ? "error-mensaje" : undefined}
        />
      </div>

      {error && (
        <p id="error-mensaje" className="error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="calculate-button">
        Calcular IMC
      </button>
    </form>
  );
}

export default IMCForm;