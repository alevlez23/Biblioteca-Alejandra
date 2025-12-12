export default function HeroSection() {
  return (
    <header className="hero">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
        <h1 className="hero-title">Blog Alejandra</h1>
        <p className="hero-subtitle">
          Biblioteca UI Profesional — Documentación y demos de componentes reutilizables.
        </p>

        <p style={{ opacity: 0.8, marginTop: 12, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
          Colección de componentes construidos con CSS avanzado (variables, glassmorphism, flexbox, grid,
          animaciones y media queries). Diseñados para ser reutilizables, accesibles y fáciles de integrar.
        </p>

        <div className="hero-icons" style={{ marginTop: 22 }}>
          <i className="devicon-vitejs-plain colored" title="Vite"></i>
          <i className="devicon-html5-plain colored" title="HTML5"></i>
          <i className="devicon-css3-plain colored" title="CSS3"></i>
          <i className="devicon-javascript-plain colored" title="JavaScript"></i>
          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-nodejs-plain colored" title="Node.js"></i>
        </div>

        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 20
          }}>
          <span className="neon-badge">Biblioteca UI Profesional</span>
          <span className="neon-badge">Por: Alejandra Velez</span>
        </div>
      </div>
    </header>
  );
}
