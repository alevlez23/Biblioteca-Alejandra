import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ui-card">
      <h3 className="component-title">
        <i className="bi bi-list-columns-reverse"></i> Accordion
      </h3>

      <div className="accordion">
        <div className="accordion-header" onClick={() => setOpen(!open)}>
          <span>Haz clic para abrir</span>
          <i className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
        </div>

        {open && (
          <div className="accordion-body">
            Bienvenido al contenido del accordion.
          </div>
        )}
      </div>
    </div>
  );
}