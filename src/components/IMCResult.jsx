function IMCResult({ imc }) {
  if (imc === null) {
    return (
      <div className="result-placeholder">
        <span className="result-icon">📊</span>
        <p>Completa el formulario para conocer tu IMC.</p>
      </div>
    );
  }

  let categoria = "";
  let descripcion = "";

  if (imc < 18.5) {
    categoria = "Bajo peso";
    descripcion = "Tu IMC está por debajo del rango habitual.";
  } else if (imc < 25) {
    categoria = "Normal";
    descripcion = "Tu IMC está dentro del rango habitual.";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
    descripcion = "Tu IMC está por encima del rango habitual.";
  } else {
    categoria = "Obesidad";
    descripcion = "Tu IMC se encuentra en el rango de obesidad.";
  }

  return (
    <div className="result-card" aria-live="polite">
      <p className="result-label">Tu Índice de Masa Corporal es</p>

      <p className="imc-value">{imc.toFixed(2)}</p>

      <span
        className={`category category-${categoria
          .toLowerCase()
          .replace(" ", "-")}`}
      >
        {categoria}
      </span>

      <p className="result-description">{descripcion}</p>

      <p className="result-note">
        Esta clasificación es orientativa para adultos y no constituye
        un diagnóstico médico.
      </p>
    </div>
  );
}

export default IMCResult;