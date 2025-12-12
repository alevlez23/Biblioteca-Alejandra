export default function Badge() {
  return (
    <div className="ui-card">
      <h3 className="component-title">
        <i className="bi bi-award-fill"></i> Badge
      </h3>

      <span className="badge-neon">Nuevo</span>
      <span className="badge-neon" style={{ marginLeft: "10px" }}>Premium</span>
    </div>
  );
}
