export default function Button() {
  return (
    <div className="ui-card">
      <h3 className="component-title">
        <i className="bi bi-lightning-charge-fill"></i> Botones
      </h3>

      <button className="ui-btn primary">Acción Principal</button>
      <button className="ui-btn outline">Acción Alternativa</button>
      <button className="ui-btn disabled" disabled>Botón Bloqueado🔒</button>
    </div>
  );
}

