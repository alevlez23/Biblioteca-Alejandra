import { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ui-card">
      <h3 className="component-title">
        <i className="bi bi-window-fullscreen"></i> Modal
      </h3>

      <button className="ui-btn primary" onClick={() => setOpen(true)}>
        Aviso Importante
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h4>Ventana Modal</h4>
            <p>Este es un modal con efecto glass.</p>
            <button className="ui-btn outline" onClick={() => setOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}