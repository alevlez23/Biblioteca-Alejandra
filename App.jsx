import HeroSection from "./components/HeroSection";

import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Modal from "./components/ui/Modal";
import Badge from "./components/ui/Badge";
import Tooltip from "./components/ui/Tooltip";
import Tabs from "./components/ui/Tabs";
import Accordion from "./components/ui/Accordion";
import Input from "./components/ui/Input";
import Alert from "./components/ui/Alert";

export default function App() {
  return (
    <div className="page">

      {/* HERO / HEADER */}
      <HeroSection />

      {/* INTRO / ABOUT */}
      <section className="section">
        <h2 className="section-title"><i className="bi bi-info-circle-fill"></i> Introducción</h2>
        <div className="ui-card" style={{ padding: 18 }}>
          <p>
            Este blog documenta la <strong>Biblioteca UI Profesional</strong>. Aquí encontrarás
            la descripción, ejemplos visuales y fragmentos de código para cada componente.
            La colección está pensada para ser modular, accesible y fácil de integrar en proyectos reales.
          </p>

          <h4 style={{ marginTop: 12 }}>Guía rápida</h4>
          <ul style={{ marginTop: 8 }}>
            <li>Variables CSS para colores y radio: <code>--primary</code>, <code>--radius</code>, etc.</li>
            <li>Layouts con <code>grid</code> y <code>flexbox</code>.</li>
            <li>Técnicas avanzadas: <code>backdrop-filter</code>, animaciones, y media queries.</li>
            <li>Estructura del proyecto: <code>/src/components</code>, <code>/src/styles</code>, <code>/assets</code>.</li>
          </ul>
        </div>
      </section>

      {/* STYLE GUIDE */}
      <section className="section">
        <h2 className="section-title"><i className="bi bi-palette-fill"></i> Guía de estilos</h2>
        <div className="showcase-grid">
          <div className="ui-card">
            <h3 className="component-title"><i className="bi bi-droplet-half"></i> Paleta & Variables</h3>
            <p style={{ opacity: 0.85 }}>
              Paleta principal basada en neón: <strong>--primary</strong> = <span style={{ color: "var(--primary)" }}>{`var(--primary)`}</span>.
              Se usan variables para tipografías, espaciado y radios para facilitar la coherencia visual.
            </p>
            <pre style={{ marginTop: 10, background: "transparent", borderRadius: 8, padding: 8 }}>
{`--primary: #00eaff;
--primary-soft: rgba(0,234,255,0.25);
--radius: 18px;`}
            </pre>
          </div>

          <div className="ui-card">
            <h3 className="component-title"><i className="bi bi-type"></i> Tipografía</h3>
            <p style={{ opacity: 0.85 }}>
              Fuente principal: Inter / Poppins. Jerarquía clara con títulos grandes y cuerpo con buena lectura.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENTS - CONTENT */}
      <section className="section">
        <h2 className="section-title"><i className="bi bi-grid-fill"></i> Componentes: Contenido</h2>
        <div className="showcase-grid">
          <Card />
          <Badge />
        </div>
      </section>

      {/* COMPONENTS - ACTIONS */}
      <section className="section">
        <h2 className="section-title"><i className="bi bi-hand-index-fill"></i> Componentes: Acciones</h2>
        <div className="showcase-grid">
          <Button />
          <Modal />
          <Alert />
        </div>
      </section>

      {/* FORMS */}
      <section className="section">
        <h2 className="section-title"><i className="bi bi-pen-fill"></i> Formularios</h2>
        <div className="showcase-grid">
          <Input />
        </div>
      </section>

      {/* NAV */}
      <section className="section">
        <h2 className="section-title"><i className="bi bi-menu-button-wide-fill"></i> Navegación</h2>
        <div className="showcase-grid">
          <Tabs />
          <Accordion />
        </div>
      </section>

      {/* INTERACTIVES */}
      <section className="section">
        <h2 className="section-title"><i className="bi bi-chat-dots-fill"></i> Interactivos</h2>
        <div className="showcase-grid">
          <Tooltip />
        </div>
      </section>

      {/* USAGE & CODE EXAMPLE */}
      <section className="section">
        <h2 className="section-title"><i className="bi bi-code-square"></i> Ejemplos de uso</h2>
        <div className="ui-card">
          <h4 style={{ marginTop: 0 }}>Botón destacado - Ejemplo</h4>
          <p style={{ opacity: 0.85 }}>
            Código de ejemplo para usar el botón destacado:
          </p>
          <pre style={{ background: "transparent", padding: 12, borderRadius: 10 }}>
{`<button className="ui-btn primary">Acción principal</button>`}
          </pre>

          <h4 style={{ marginTop: 12 }}>Modal - Ejemplo</h4>
          <pre style={{ background: "transparent", padding: 12, borderRadius: 10 }}>
{`<Modal />  // importa y usa el componente Modal desde /components/ui/Modal.jsx`}
          </pre>
        </div>
      </section>

      {/* FOOTER / CREDITS */}
      <footer className="footer">
        <p>Blog Alejandra • Biblioteca UI Profesional • Diseñado por <strong>Alejandra Velez</strong> • 2025</p>
        <p style={{ marginTop: 6, fontSize: 13, opacity: 0.7 }}>
          Entrega: incluye capturas, enlace a GitHub y guía de uso (README). Exporta esta demo a PDF desde el navegador.
        </p>
      </footer>

    </div>
  );
}
